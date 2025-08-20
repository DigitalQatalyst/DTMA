"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router"; // Use Next.js's useRouter
import React, { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { authenticated, user } = useAuth(); // To handle redirection without page reload
  const [loading, setLoading] = useState(true); // Add loading state to manage redirection

  useEffect(() => {
    // Log to check authentication state
    console.log("User authenticated:", user?.authenticated);
    if (!authenticated) {
      // Redirect to login page if not authenticated
      console.log("Redirecting to login...");
      window.location.href =
        "https://dgqatalyst.b2clogin.com/dgqatalyst.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_login&client_id=5ca62169-f345-4c82-8ad9-0873d0d61e20&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=openid&response_type=code&prompt=login";
    } else {
      setLoading(false); // Set loading to false once authentication check is done
    }
  }, [authenticated]); // Dependency on user.authenticated to trigger the effect when the user state changes

  if (loading) {
    return <div>Loading...</div>; // Render loading while checking authentication
  }

  return <>{children}</>; // Return children if authenticated
};

export default ProtectedRoute;
