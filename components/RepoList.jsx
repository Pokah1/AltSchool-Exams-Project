import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FetchRepo from "./Fetchrepo";

const RepositoryListPage = () => {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const data = await FetchRepo();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
    fetchRepoData();
  }, []);

  return (
    <div>
      <h2>My Repositories</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repositories/${repo.name}`}>
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryListPage;