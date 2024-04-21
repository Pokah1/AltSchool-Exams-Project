import React from "react";
import { Link } from 'react-router-dom'

const  HomePage = () => {
 return (
    <section>
        <h1>Edikan Odokwo</h1>
          <h3>A Software Developer</h3>
          <p>
            <span>I build exceptional and accessible digital</span> interfaces
          </p>
          <Link to="/repos">
            <button className="btn">View Repositories</button>
          </Link>
          <Link to='/https://github.com/new' className="btn color-2-black-btn">New Repo</Link>

    </section>
 );
};

export default HomePage;