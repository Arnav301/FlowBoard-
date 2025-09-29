// colors.js - Exportable color constants for FlowBoard
export const COLORS = {
  // Backgrounds - Light Theme
  background: {
    primary: '#ffffff',        // Pure white background
    secondary: '#f8fafc',      // Very light gray background
    card: '#ffffff',           // White card backgrounds
    overlay: 'rgba(248, 250, 252, 0.95)' // Light overlay background
  },
  
  // Text - Light Theme
  text: {
    primary: '#1f2937',        // Dark gray for main text
    secondary: '#6b7280',      // Medium gray for secondary text
    muted: '#9ca3af',          // Light gray for muted text
    inverted: '#ffffff'        // White text on dark backgrounds
  },
  
  // Buttons
  buttons: {
    primary: {
      background: '#3b82f6',   // Bright blue
      text: '#ffffff',         // White text
      hover: '#2563eb'         // Darker blue on hover
    },
    secondary: {
      background: '#ffffff',
      border: '#d1d5db',       // Light gray border
      text: '#374151',         // Dark gray text
      hover: '#f9fafb'         // Very light gray hover
    },
    text: {
      color: '#6b7280',        // Medium gray text
      hover: '#374151'         // Darker gray on hover
    }
  },
  
  // Accents
  accents: {
    badge: '#dbeafe',          // Light blue background for badges
    badgeText: '#1d4ed8',      // Dark blue text for badges
    badgeBorder: '#93c5fd',    // Medium blue border
    progress: {
      background: '#374151',   // Dark gray background
      fill: '#10b981',         // Green progress fill
      text: '#ffffff'          // White percentage text
    },
    steps: {
      ideas: '#8b5cf6',        // Purple for Ideas
      process: '#3b82f6',      // Blue for Process
      done: '#10b981'          // Green for Done
    },
    interactions: {
      select: '#ef4444',       // Red for Select
      draw: '#f59e0b',         // Amber for Draw
      note: '#10b981'          // Green for Note
    }
  },
  
  // Navigation
  navigation: {
    linkDefault: '#ffffff',    // White
    linkHover: '#60a5fa',      // Light blue
    linkActive: '#3b82f6',     // Blue
    dropdownBg: '#1e293b',     // Dark background
    dropdownBorder: '#334155'  // Border color
  },
  
  // States
  states: {
    success: '#10b981',        // Success green
    warning: '#f59e0b',        // Warning amber
    error: '#ef4444',          // Error red
    info: '#3b82f6'            // Info blue
  },
  
  // Shadows
  shadows: {
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    button: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
    heroDemo: '0 25px 50px rgba(0, 0, 0, 0.3)'
  },
  
  // Gradients
  gradients: {
    hero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    card: 'linear-gradient(145deg, #1e293b 0%, #334155 100%)'
  }
};

// CSS Custom Properties for global use
export const CSS_VARIABLES = `
  :root {
    /* Backgrounds */
    --bg-primary: ${COLORS.background.primary};
    --bg-secondary: ${COLORS.background.secondary};
    --bg-card: ${COLORS.background.card};
    --bg-overlay: ${COLORS.background.overlay};
    
    /* Text */
    --text-primary: ${COLORS.text.primary};
    --text-secondary: ${COLORS.text.secondary};
    --text-muted: ${COLORS.text.muted};
    --text-inverted: ${COLORS.text.inverted};
    
    /* Buttons */
    --btn-primary-bg: ${COLORS.buttons.primary.background};
    --btn-primary-text: ${COLORS.buttons.primary.text};
    --btn-primary-hover: ${COLORS.buttons.primary.hover};
    --btn-secondary-bg: ${COLORS.buttons.secondary.background};
    --btn-secondary-border: ${COLORS.buttons.secondary.border};
    --btn-secondary-text: ${COLORS.buttons.secondary.text};
    --btn-secondary-hover: ${COLORS.buttons.secondary.hover};
    --btn-text-color: ${COLORS.buttons.text.color};
    --btn-text-hover: ${COLORS.buttons.text.hover};
    
    /* Accents */
    --accent-badge: ${COLORS.accents.badge};
    --accent-badge-border: ${COLORS.accents.badgeBorder};
    --progress-bg: ${COLORS.accents.progress.background};
    --progress-fill: ${COLORS.accents.progress.fill};
    --progress-text: ${COLORS.accents.progress.text};
    
    /* Steps */
    --step-ideas: ${COLORS.accents.steps.ideas};
    --step-process: ${COLORS.accents.steps.process};
    --step-done: ${COLORS.accents.steps.done};
    
    /* Interactions */
    --interaction-select: ${COLORS.accents.interactions.select};
    --interaction-draw: ${COLORS.accents.interactions.draw};
    --interaction-note: ${COLORS.accents.interactions.note};
    
    /* Navigation */
    --nav-link-default: ${COLORS.navigation.linkDefault};
    --nav-link-hover: ${COLORS.navigation.linkHover};
    --nav-link-active: ${COLORS.navigation.linkActive};
    --nav-dropdown-bg: ${COLORS.navigation.dropdownBg};
    --nav-dropdown-border: ${COLORS.navigation.dropdownBorder};
    
    /* States */
    --state-success: ${COLORS.states.success};
    --state-warning: ${COLORS.states.warning};
    --state-error: ${COLORS.states.error};
    --state-info: ${COLORS.states.info};
    
    /* Shadows */
    --shadow-card: ${COLORS.shadows.card};
    --shadow-button: ${COLORS.shadows.button};
    --shadow-hero-demo: ${COLORS.shadows.heroDemo};
    
    /* Gradients */
    --gradient-hero: ${COLORS.gradients.hero};
    --gradient-card: ${COLORS.gradients.card};
  }
`;

// Color utility functions
export const getColorWithOpacity = (color, opacity) => {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Theme variants
export const THEME_VARIANTS = {
  dark: COLORS, // Default dark theme
  // Future: light theme could be added here
};

export default COLORS;
