import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/DeveloperLogin.css"; // Assuming you have a CSS file for styling

export default function userLogin() {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back! 👋</h2>
          <p>Sign in to your account to continue</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="identifier">Email or Username</label>
            <input
              type="text"
              name="identifier"
              id="identifier"
              value={form.identifier}
              onChange={handleChange}
              required
              placeholder="Enter your email or username"
              autoComplete="username"
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={loading}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <div className="show-password">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                disabled={loading}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
          </div>

          {error && (
            <div className="error-msg" role="alert">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <div className="login-actions">
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot your password?</a>
            </div>
          </div>
        </form>
        {/* Social login icons */}
        <div className="social-login-icons">
          <a
            href="#"
            aria-label="Sign in with Facebook"
            className="icon facebook"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
              <path d="M29 0h-26c-1.7 0-3 1.3-3 3v26c0 1.7 1.3 3 3 3h13v-12h-4v-5h4v-4c0-4.1 2.5-6.3 6.1-6.3 1.7 0 3.2 0.1 3.6 0.2v4.2h-2.5c-2 0-2.4 1-2.4 2.4v3.1h5l-1 5h-4v12h7c1.7 0 3-1.3 3-3v-26c0-1.7-1.3-3-3-3z" />
            </svg>
          </a>
          <a href="#" aria-label="Sign in with Google" className="icon google">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
              <path d="M31.7 16.3c0-1.1-0.1-2.2-0.3-3.2h-15.4v6.1h8.8c-0.4 2.1-1.7 3.9-3.6 5.1v4.2h5.8c3.4-3.1 5.4-7.7 5.4-12.2z" />
              <path d="M16 32c4.3 0 7.9-1.4 10.5-3.8l-5.8-4.2c-1.6 1.1-3.7 1.8-6 1.8-4.6 0-8.5-3.1-9.9-7.3h-6v4.3c2.6 5.1 8 9.2 15.2 9.2z" />
              <path d="M6.1 19.5c-0.5-1.5-0.8-3-0.8-4.5s0.3-3.1 0.8-4.5v-4.3h-6c-1.2 2.3-2 4.9-2 7.8s0.7 5.5 2 7.8l6-4.3z" />
              <path d="M16 6.4c2.3 0 4.3 0.8 5.9 2.3l4.4-4.4c-2.6-2.4-6.2-3.9-10.3-3.9-7.2 0-12.6 4.1-15.2 9.2l6 4.3c1.4-4.2 5.3-7.3 9.9-7.3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Sign in with Twitter"
            className="icon twitter"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
              <path d="M32 6.1c-1.2 0.5-2.4 0.8-3.7 1 1.3-0.8 2.3-2.1 2.8-3.6-1.2 0.7-2.6 1.3-4 1.6-1.1-1.2-2.7-2-4.4-2-3.3 0-6 2.7-6 6 0 0.5 0.1 1 0.2 1.5-5-0.2-9.4-2.7-12.3-6.4-0.5 0.8-0.8 1.7-0.8 2.7 0 1.8 0.9 3.4 2.3 4.3-0.8 0-1.6-0.2-2.3-0.6v0.1c0 2.5 1.8 4.6 4.2 5.1-0.4 0.1-0.8 0.2-1.2 0.2-0.3 0-0.6 0-0.9-0.1 0.6 1.9 2.4 3.3 4.5 3.3-1.7 1.3-3.8 2-6 2-0.4 0-0.8 0-1.2-0.1 2.1 1.3 4.6 2.1 7.2 2.1 8.6 0 13.3-7.1 13.3-13.3 0-0.2 0-0.4 0-0.6 0.9-0.7 1.7-1.5 2.3-2.4z" />
            </svg>
          </a>
          <a href="#" aria-label="Sign in with GitHub" className="icon github">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0.4c-8.8 0-16 7.2-16 16 0 7.1 4.6 13.1 10.9 15.2 0.8 0.1 1.1-0.3 1.1-0.8v-2.9c-4.4 1-5.3-2.1-5.3-2.1-0.7-1.7-1.7-2.1-1.7-2.1-1.4-1 0.1-1 0.1-1 1.5 0.1 2.3 1.5 2.3 1.5 1.4 2.3 3.7 1.7 4.6 1.3 0.1-1 0.5-1.7 0.9-2.1-3.5-0.4-7.2-1.8-7.2-8 0-1.8 0.6-3.2 1.5-4.3-0.2-0.4-0.7-2 0.1-4.1 0 0 1.3-0.4 4.3 1.5 1.2-0.3 2.5-0.5 3.8-0.5s2.6 0.2 3.8 0.5c3-1.9 4.3-1.5 4.3-1.5 0.8 2.1 0.3 3.7 0.1 4.1 0.9 1.1 1.5 2.5 1.5 4.3 0 6.2-3.7 7.6-7.2 8 0.5 0.4 1 1.3 1 2.7v4c0 0.5 0.3 0.9 1.1 0.8 6.3-2.1 10.9-8.1 10.9-15.2 0-8.8-7.2-16-16-16z" />
            </svg>
          </a>
        </div>

        <div className="login-footer">
          <p className="signup-redirect">
            {/* icons of facebook google and twwiter and github */}
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
