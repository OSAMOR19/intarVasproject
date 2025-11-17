"use client";

import { useEffect } from 'react';

/**
 * IntarVAS Support Widget Component
 * Loads the support widget script globally and ensures it appears on all pages
 */
const SupportWidget = () => {
  useEffect(() => {
    // Check if script already exists to prevent duplicate loads
    const existingScript = document.querySelector(
      'script[src*="support.ccaas.intarvas.com"]'
    );

    if (existingScript) {
      // Script already loaded via index.html or previous render
      return;
    }

    // Create and inject the script dynamically (fallback)
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://support.ccaas.intarvas.com/callback.js?uid=14626ee5-9eb1-4d63-8152-2d98cef8d037';
    script.charset = 'utf-8';

    // Add error handling
    script.onerror = () => {
      console.error('Failed to load IntarVAS support widget');
    };

    script.onload = () => {
      console.log('IntarVAS support widget loaded successfully');
    };

    // Append to body
    document.body.appendChild(script);

    // Cleanup function (optional - keeps script for SPA navigation)
    return () => {
      // We don't remove the script on unmount to keep it persistent across routes
      // If you want to remove it on unmount, uncomment the line below:
      // document.body.removeChild(script);
    };
  }, []); // Empty dependency array = runs once on mount

  // This component renders nothing visible
  return null;
};

export default SupportWidget;
