import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <aside style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>404 - Page Not Found</h1>
      <Link to="/">
        <button
          style={{
            padding: "20px",
            width: "200px",
            borderRadius: "5px",
            boxShadow: "0 4px 15px 0 rgba(46, 68, 36, 0.75)",
            margin: "30px",
            fontSize: "1rem",
            WebkitBackgroundClip: "text",
            fontSize: "1.2rem",
          }}
        >
          Go to Home Page
        </button>
      </Link>
    </aside>
  );
};

export default PageNotFound;
