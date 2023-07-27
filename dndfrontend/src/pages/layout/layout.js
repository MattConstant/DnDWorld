import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    // Perform logout actions, e.g., clear the token from local storage
    localStorage.removeItem('token');
    setIsAuthenticated(false); // Set isAuthenticated to false to trigger re-render
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/monsters">Monsters</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          {!isAuthenticated && ( // Show the links only if the user is not authenticated
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {isAuthenticated && ( // Show logout button if the user is authenticated
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
