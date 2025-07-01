import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import "./Css/UserDashboard.css";

export default function UserDashboard() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("Profile");
  const navigate = useNavigate();
  const { dispatch } = useLogin();

  const handleThemeToggle = () => setDark((d) => !d);

  const handleSidebarClick = (section) => {
    if (section === "Logout") {
      dispatch({ type: "LOGOUT" });
      navigate("/section/userLogin");
    } else {
      setActive(section);
    }
  };

  return (
    <div className={`dashboard-root${dark ? " dark" : ""}`}>
      {/* Top Navbar */}
      <nav className="dashboard-navbar">
        <div className="navbar-appname">UserConnect</div>
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={handleThemeToggle}>
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              navigate("/section/userLogin");
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
              className={active === "My Requests" ? "active" : ""}
              onClick={() => handleSidebarClick("My Requests")}
            >
              My Requests
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
          <h2>Welcome, User!</h2>
          <div className="dashboard-content">
            {active === "Profile" && (
              <section className="profile-card">
                <h3>Profile Card</h3>
                <div>
                  <strong>Name:</strong> Jane Smith
                </div>
                <div>
                  <strong>Email:</strong> jane@example.com
                </div>
                <div>
                  <strong>Account Type:</strong> User
                </div>
              </section>
            )}
            {active === "My Requests" && (
              <section className="dashboard-section">
                <h3>My Requests / Bids</h3>
                <ul>
                  <li>Request 1 - Open</li>
                  <li>Request 2 - In Progress</li>
                  <li>Bid from DevX - Pending</li>
                </ul>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
