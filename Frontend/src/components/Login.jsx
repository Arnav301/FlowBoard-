import React, { useState, useCallback, useMemo, useEffect } from "react"
import { useApp } from "../context/AppContext"
import "./Login.css"

// ==========================================
// LOGIN COMPONENT - LIGHT THEME COMPACT
// ==========================================

export const Login = React.memo(() => {
  // Get authentication mode and navigation function from context
  const { authMode, navigateToAuth } = useApp()
  
  // ==========================================
  // STATE MANAGEMENT - COMPACT FORMS
  // ==========================================
  
  // Signup form state with compact fields
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  })

  // Login form state with compact fields
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  })

  // Loading state for form submission
  const [isLoading, setIsLoading] = useState(false)
  // Password visibility toggle state
  const [showPassword, setShowPassword] = useState(false)
  // Form validation states
  const [errors, setErrors] = useState({})
  // Focus states for floating labels
  const [focusStates, setFocusStates] = useState({})
  // Animation states
  const [isCardVisible, setIsCardVisible] = useState(false)
  // Forgot password state
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")

  // ==========================================
  // ANIMATION EFFECTS
  // ==========================================
  
  // Card entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // ==========================================
  // EVENT HANDLERS - OPTIMIZED WITH USECALLBACK
  // ==========================================
  
  // Handle input field changes for both signup and login forms
  const changeInputHandler = useCallback((e, type) => {
    const { name, value } = e.target
    if (type === "signup") {
      setSignupInput(prev => ({ ...prev, [name]: value }))
    } else {
      setLoginInput(prev => ({ ...prev, [name]: value }))
    }
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }, [errors])

  // Handle input focus for floating labels
  const handleFocus = useCallback((fieldName) => {
    setFocusStates(prev => ({ ...prev, [fieldName]: true }))
  }, [])

  // Handle input blur for floating labels
  const handleBlur = useCallback((fieldName, value) => {
    if (!value) {
      setFocusStates(prev => ({ ...prev, [fieldName]: false }))
    }
  }, [])

  // Handle form submission with loading state
  const handleRegistration = useCallback(async (type) => {
    setIsLoading(true)
    const inputData = type === "signup" ? signupInput : loginInput
       // Simulate API call with compact timeout
    setTimeout(() => {
      console.log(`${type} data:`, inputData)
      setIsLoading(false)
      // Here you would typically handle the actual authentication
    }, 1000)
  }, [signupInput, loginInput])
  // Toggle password visibility for both forms
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev)
  }, [])
  // Switch between signup and login modes
  const switchMode = useCallback((mode) => {
    navigateToAuth(mode)
  }, [navigateToAuth])

  // Handle forgot password
  const handleForgotPassword = useCallback((e) => {
    e.preventDefault()
    setShowForgotPassword(true)
  }, [])

  // Handle forgot password form submission
  const handleForgotPasswordSubmit = useCallback(async () => {
    if (!forgotPasswordEmail) {
      setErrors({ email: 'Email is required' })
      return
    }
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset email sent to:', forgotPasswordEmail)
      setIsLoading(false)
      setShowForgotPassword(false)
      setForgotPasswordEmail("")
      // You could show a success message here
    }, 1000)
  }, [forgotPasswordEmail])

  // Handle back from forgot password
  const handleBackFromForgotPassword = useCallback(() => {
    setShowForgotPassword(false)
    setForgotPasswordEmail("")
    setErrors({})
  }, [])
  // ==========================================
  // MEMOIZED FORM CONTENT - PERFORMANCE OPTIMIZED
  // ==========================================
  // Memoize form content to prevent unnecessary re-renders
  const formContent = useMemo(() => {
    if (showForgotPassword) {
      return (
        <div className="form-section">
          <div className="forgot-password-form">
            <div className="form-header">
              <button 
                className="back-btn"
                onClick={handleBackFromForgotPassword}
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Login
              </button>
              <h2 className="form-title">Reset Password</h2>
              <p className="form-subtitle">Enter your email address and we'll send you a link to reset your password.</p>
            </div>
            
            <form className="auth-form">
              <div className="input-group">
                <label htmlFor="forgot-email" className={`input-label ${focusStates['forgot-email'] || forgotPasswordEmail ? 'active' : ''}`}>
                  <span className="label-icon">📧</span>
                  Email Address
                </label>
                <input
                  id="forgot-email"
                  type="email"
                  name="email"
                  value={forgotPasswordEmail}
                  onChange={(e) => {
                    setForgotPasswordEmail(e.target.value)
                    if (errors.email) {
                      setErrors(prev => ({ ...prev, email: '' }))
                    }
                  }}
                  onFocus={() => handleFocus('forgot-email')}
                  onBlur={(e) => handleBlur('forgot-email', e.target.value)}
                  placeholder="Enter your email address"
                  className={`auth-input ${focusStates['forgot-email'] ? 'focused' : ''} ${errors.email ? 'error' : ''}`}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <button 
                type="button"
                className={`auth-button ${isLoading ? 'loading' : ''}`}
                onClick={handleForgotPasswordSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending Reset Link...
                  </>
                ) : (
                  <>
                    <span className="button-icon">📧</span>
                    Send Reset Link
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )
    } else if (authMode === 'signup') {
      return (
        <div className="form-section">
          <form className="auth-form">
            <div className="input-group">
              <label htmlFor="signup-username" className={`input-label ${focusStates['signup-name'] || signupInput.name ? 'active' : ''}`}>
                <span className="label-icon">👤</span>
                Username
              </label>
              <input
                id="signup-username"
                type="text"
                name="name"
                value={signupInput.name}
                onChange={(e) => changeInputHandler(e, "signup")}
                onFocus={() => handleFocus('signup-name')}
                onBlur={(e) => handleBlur('signup-name', e.target.value)}
                placeholder="Enter your username"
                className={`auth-input ${focusStates['signup-name'] ? 'focused' : ''} ${errors.name ? 'error' : ''}`}
                required
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="signup-email" className={`input-label ${focusStates['signup-email'] || signupInput.email ? 'active' : ''}`}>
                <span className="label-icon">📧</span>
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                name="email"
                value={signupInput.email}
                onChange={(e) => changeInputHandler(e, "signup")}
                onFocus={() => handleFocus('signup-email')}
                onBlur={(e) => handleBlur('signup-email', e.target.value)}
                placeholder="Enter your email"
                className={`auth-input ${focusStates['signup-email'] ? 'focused' : ''} ${errors.email ? 'error' : ''}`}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="signup-password" className={`input-label ${focusStates['signup-password'] || signupInput.password ? 'active' : ''}`}>
                <span className="label-icon">🔒</span>
                Password
              </label>
              <div className="password-input-wrapper">
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  onFocus={() => handleFocus('signup-password')}
                  onBlur={(e) => handleBlur('signup-password', e.target.value)}
                  placeholder="Create a password"
                  className={`auth-input ${focusStates['signup-password'] ? 'focused' : ''} ${errors.password ? 'error' : ''}`}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <button 
              type="button"
              className={`auth-button ${isLoading ? 'loading' : ''}`}
              onClick={() => handleRegistration("signup")}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Creating Account...
                </>
              ) : (
                <>
                  <span className="button-icon">🚀</span>
                  Create Account
                </>
              )}
            </button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="form-section">
          <form className="auth-form">
            <div className="input-group">
              <label htmlFor="login-email" className={`input-label ${focusStates['login-email'] || loginInput.email ? 'active' : ''}`}>
                <span className="label-icon">📧</span>
                Email
              </label>
              <input
                id="login-email"
                type="email"
                name="email"
                value={loginInput.email}
                onChange={(e) => changeInputHandler(e, "login")}
                onFocus={() => handleFocus('login-email')}
                onBlur={(e) => handleBlur('login-email', e.target.value)}
                placeholder="Enter your email"
                className={`auth-input ${focusStates['login-email'] ? 'focused' : ''} ${errors.email ? 'error' : ''}`}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="login-password" className={`input-label ${focusStates['login-password'] || loginInput.password ? 'active' : ''}`}>
                <span className="label-icon">🔒</span>
                Password
              </label>
              <div className="password-input-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                  onFocus={() => handleFocus('login-password')}
                  onBlur={(e) => handleBlur('login-password', e.target.value)}
                  placeholder="Enter your password"
                  className={`auth-input ${focusStates['login-password'] ? 'focused' : ''} ${errors.password ? 'error' : ''}`}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me 
              </label>
              <button 
                type="button"
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;Forgot password?
              </button>
            </div>

            <button 
              type="button"
              className={`auth-button ${isLoading ? 'loading' : ''}`}
              onClick={() => handleRegistration("login")}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Signing In...
                </>
              ) : (
                <>
                  <span className="button-icon">🔑</span>
                  Sign In
                </>
              )}
            </button>
          </form>
        </div>
      )
    }
  }, [authMode, signupInput, loginInput, showPassword, isLoading, focusStates, errors, showForgotPassword, forgotPasswordEmail, changeInputHandler, handleRegistration, togglePasswordVisibility, handleFocus, handleBlur, handleForgotPassword, handleForgotPasswordSubmit, handleBackFromForgotPassword])
  // ==========================================
  // RENDER - COMPACT LIGHT THEME LAYOUT
  // ==========================================
  return (
    <div className="login-container">
      <div className={`login-card ${isCardVisible ? 'visible' : ''}`}>
        {/* ==========================================
            TAB NAVIGATION - SIGNUP/LOGIN SWITCHER
            ========================================== */}
        {!showForgotPassword && (
        <div className="tab-navigation">
          <button 
            className={`tab-button ${authMode === 'signup' ? 'active' : ''}`}
            onClick={() => switchMode('signup')}
          >
            <span className="tab-icon">👤</span>
            Sign Up
          </button>
          <button 
            className={`tab-button ${authMode === 'login' ? 'active' : ''}`}
            onClick={() => switchMode('login')}
          >
         <span className="tab-icon">🔑</span>
            Login
          </button>
        </div>
        )}
        {/* ==========================================
            FORM CONTENT - DYNAMIC SIGNUP/LOGIN
            ========================================== */}
        <div className="form-content">
          {formContent}
        </div>
        {/* ==========================================
            SOCIAL LOGIN - THIRD-PARTY AUTHENTICATION
            ========================================== */}
        {!showForgotPassword && (
        <div className="social-login">
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <div className="social-buttons">
            <button className="social-button google">
              <span className="social-icon">G</span>
              Google
            </button>
            <button className="social-button github">
              <span className="social-icon">⚡</span>
              GitHub
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
})

export default Login
