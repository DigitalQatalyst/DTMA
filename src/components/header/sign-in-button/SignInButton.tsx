import React from "react";

const SignInButton = () => (
  <div 
    style={{
      display: 'flex',
      height: '40px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      
      borderRadius: '8px',
      border: '1px solid #008080',
      color: '#008080',
      textAlign: 'center',
      fontFamily: 'Outfit',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0.1px',
      padding: '0 20px'
    }}
  >
    Sign In
  </div>
);

export default SignInButton;