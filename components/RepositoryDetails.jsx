import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageNotFound from './404page';

const RepositoryDetails = ({ repos }) => {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    console.log("Repos:", repos)
  if (!repos) return;
    const currentRepo = repos.find(repo => repo.name === repoName);
    // console.log("Current Repo:" currentRepo);
    if (currentRepo) {
      setRepoDetails(currentRepo);
    } else {
      setNotFound(true);
    }
  }, [repos, repoName]);

  if (notFound) {
    return <PageNotFound />;
  }

  if (!repoDetails) {
    return <p>Loading...</p>;
  }

  // Logic to determine index of current repository
  const currentIndex = repos.findIndex(repo => repo.name === repoName);
  const previousIndex = (currentIndex - 1 + repos.length) % repos.length;
  const nextIndex = (currentIndex + 1) % repos.length;

  // Get previous and next repository names
  const previousRepoName = repos[previousIndex].name;
  const nextRepoName = repos[nextIndex].name;

  return (
    <div>
      <div>
        <h2>{repoDetails.name}</h2>
        <p>{repoDetails.description}</p>
        <p>Language: {repoDetails.language}</p>
        <p>Stars: {repoDetails.stargazers_count}</p>
        <p>Forks: {repoDetails.forks_count}</p>
        <p>Last Updated: {repoDetails.updated_at}</p>
        <p>License: {repoDetails.license ? repoDetails.license.name : 'N/A'}</p>
        <Link to={`/repo/${previousRepoName}`}>Previous</Link>
        <Link to={`/repo/${nextRepoName}`}>Next</Link>
      </div>
    </div>
  );
};

export default RepositoryDetails;
