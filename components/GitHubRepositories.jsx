import React, { useState, useEffect, useMemo } from 'react';
// import RepositoryDetails from './RepositoryDetails';
import { Link } from 'react-router-dom';

const GitHubRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track error

  useEffect(() => {
    fetch('https://api.github.com/users/Pokah1/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched repos:', data);
        setRepositories(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching repositories: ', error);
        setError(error.message); // Set error message in state
        setLoading(false); // Set loading to false on error
      });
  }, []);

  // Memoize the rendered list of repositories
  const renderedRepositories = useMemo(() => {
    return repositories.map(repo => (
      <div key={repo.id}>
        <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
      </div>
    ));
  }, [repositories]);

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      {loading ? (
        <p>Fetching...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>{renderedRepositories}</div>
      )}
    </div>
  );
};

export default GitHubRepositories;
