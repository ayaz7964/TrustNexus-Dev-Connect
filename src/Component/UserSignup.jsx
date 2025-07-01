import { useLogin } from "../context/LoginContext";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Css/DeveloperLogin.css"; // Reusing login styles
import { Link, useNavigate } from "react-router-dom";

export default function UserSignUp() {
  const { state, dispatch } = useLogin();
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up - Your App Name";
  }, []);

  const formik = useFormik({
    initialValues: {
      Username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      Username: Yup.string().min(2).required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6).required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      // Check if email already exists in context
      if (state.users.some((u) => u.email === values.email)) {
        setErrors({ email: "Email already registered" });
        setSubmitting(false);
        return;
      }
      // Dispatch signup action
      dispatch({
        type: "SIGNUP",
        payload: {
          Username: values.Username,
          email: values.email,
          password: values.password,
          TechStackinput: values.TechStackinput,
          LinkedInGitHubURL: values.LinkedInGitHubURL,
        },
      });
      navigate("/section/userLogin");
    },
  });

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h2>Create Account 🚀</h2>
          <p>Join us by filling the details below</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              id="Username"
              name="Username"
              placeholder="Enter your username"
              value={formik.values.Username}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
            {formik.touched.Username && formik.errors.Username && (
              <div className="error-msg">{formik.errors.Username}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-msg">{formik.errors.email}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formik.values.password}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-msg">{formik.errors.password}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="error-msg">{formik.errors.confirmPassword}</div>
              )}
          </div>

          <div className="login-actions">
            <button
              type="submit"
              className="login-btn"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <>
                  <span className="loading-spinner"></span> Signing Up...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
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
            Already have an account? <Link to="/section/userLogin">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
