import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'; 
import HomePage from '../components/HomePage';
import GitHubRepositories from '../components/GitHubRepositories';
import RepositoryDetails from '../components/RepositoryDetails';
import PageNotFound from '../components/404page'; 
import {HelmetProvider}  from 'react-helmet-async'

const App = () => {
  return (
    <HelmetProvider>
 <main>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> 
        <Route exact path="/repos" element={<GitHubRepositories />} /> 
        <Route path="/repo/:repoName" element={<RepositoryDetails />} /> 
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </main>
    </HelmetProvider>
   
  );
};


export default App;