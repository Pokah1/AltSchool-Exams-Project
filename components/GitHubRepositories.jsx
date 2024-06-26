import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RepoModal from "./RepoModal";
import styles from "../componentStyles/GitHubRepo.module.css";

const GitHubRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Pokah1/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched repos:", data);
        setRepositories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repositories: ", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepositories.slice(
    indexOfFirstRepo,
    indexOfLastRepo
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const createRepository = (newRepoData) => {
    // Logic to create a new repository
    console.log("Creating new repository:", newRepoData);
    // Update repositories list after successful creation
    setRepositories([...repositories, newRepoData]);
    // Close the modal
    setShowModal(false);
  };

  return (
    <main className={styles.main}>
      <header className={styles.head}>
        <h1 className={styles["Repo-info"]}>My GitHub Repositories</h1>
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.input}
        />
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul className={styles.list}>
            {currentRepos.map((repo) => (
              <li key={repo.id} className={styles.item}>
                <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
              </li>
            ))}
          </ul>
          <nav className={styles.nav}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentRepos.length < reposPerPage}
            >
              Next
            </button>
          </nav>
          <button onClick={() => setShowModal(true)}>
            Create New Repository
          </button>
          {showModal && (
            <div className="modal-background">
              <dialog open className="modal-content">
                <RepoModal onCreate={createRepository} />
                <button onClick={() => setShowModal(false)}>Close</button>
              </dialog>
            </div>
          )}
        </>
      )}
      <footer className={styles.nav}>
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
      </footer>
    </main>
  );
};

export default GitHubRepositories;
