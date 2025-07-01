import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import "./Css/DevDashboard.css";

export default function DevDashboard() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("Profile");
  const navigate = useNavigate();
  const { dispatch } = useLogin();

  const handleThemeToggle = () => setDark((d) => !d);

  const handleSidebarClick = (section) => {
    if (section === "Logout") {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } else {
      setActive(section);
    }
  };

  return (
    <div className={`dashboard-root${dark ? " dark" : ""}`}>
      {/* Top Navbar */}
      <nav className="dashboard-navbar">
        <div className="navbar-appname">DevConnect</div>
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={handleThemeToggle}>
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              navigate("/section/developerLogin");
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <ul>
            <li
              className={active === "Profile" ? "active" : ""}
              onClick={() => handleSidebarClick("Profile")}
            >
              Profile
            </li>
            <li
              className={active === "Projects" ? "active" : ""}
              onClick={() => handleSidebarClick("Projects")}
            >
              Projects
            </li>
            <li
              className={active === "Bids" ? "active" : ""}
              onClick={() => handleSidebarClick("Bids")}
            >
              Bids
            </li>
            <li
              className="sidebar-logout"
              onClick={() => handleSidebarClick("Logout")}
            >
              Logout
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <h2>Welcome, Developer!</h2>
          <div className="dashboard-content">
            {active === "Profile" && (
              <section className="profile-card">
                <h3>Profile Card</h3>
                <div>
                  <strong>Name:</strong> John Doe
                </div>
                <div>
                  <strong>Tech Stack:</strong> React, Node.js
                </div>
                <div>
                  <strong>LinkedIn:</strong>{" "}
                  <a href="#">linkedin.com/in/johndoe</a>
                </div>
              </section>
            )}
            {active === "Projects" && (
              <section className="dashboard-section">
                <h3>Active Projects</h3>
                <ul>
                  <li>Project Alpha - Bid Submitted</li>
                  <li>Project Beta - In Progress</li>
                </ul>
              </section>
            )}
            {active === "Bids" && (
              <section className="dashboard-section">
                <h3>Recent Bids</h3>
                <ul>
                  <li>Bid on Project Gamma - Pending</li>
                  <li>Bid on Project Delta - Accepted</li>
                </ul>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
