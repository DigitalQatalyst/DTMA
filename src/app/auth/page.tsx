"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthSession, storeSession } from "./session/authSession";
// import {AuthSession, storeSession} from "./session_utils";

function Content() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const loginUrl =
    "https://dgqatalyst.b2clogin.com/dgqatalyst.onmicrosoft.com/B2C_1_login/oauth2/v2.0/token"; //tenant dgqatalyst
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const redirect_url = "http://localhost:3000/auth";
  const scope = "openid profile";
  const registerUrl =
    "https://dgqatalyst.b2clogin.com/dgqatalyst.onmicrosoft.com/B2C_1_register_v1/oauth2/v2.0/token";
  const passwordResetUrl =
    "https://dgqatalyst.b2clogin.com/dgqatalyst.onmicrosoft.com/B2C_1_password_reset/oauth2/v2.0/token";

  const requestBody = {
    client_id: client_id,
    client_secret: client_secret,
    redirect_uri: redirect_url,
    code: code,
    scope: scope,
    grant_type: "authorization_code",
  };

  const urlSearchParams = new URLSearchParams(
    requestBody as Record<string, string>
  );

  useEffect(() => {
    if (!error) return;
    // Handle error
    if (error === "access_denied") {
      window.location.href =
        "https://dgqatalyst.b2clogin.com/dgqatalyst.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_password_reset&client_id=3d45a699-a16c-4f55-b8ac-07d1c199b1f8&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=openid&response_type=code&prompt=login";
      console.error("Access denied by user");
    } else if (error === "invalid_request") {
      console.log("invalid error", error);
      console.error("Invalid request, possibly due to missing parameters");
    } else {
      console.error("An unknown error occurred:", error);
    }
  }, [error]);

  useEffect(() => {
    if (!code) return;

    // Try login first
    fetch(loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlSearchParams,
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.error === "invalid_grant") {
          // If login fails with invalid_grant, try register
          return fetch(registerUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: urlSearchParams,
          })
            .then((res) => res.json())
            .then((json) => {
              if (json.error === "invalid_grant") {
                // If register also fails with invalid_grant, try password reset
                return fetch(passwordResetUrl, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: urlSearchParams,
                })
                  .then((res) => res.json())
                  .then((json) => {
                    console.log("Password reset response:", json);
                    setTimeout(() => {
                      window.location.href =
                        "https://dgqatalyst.b2clogin.com/dgqatalyst.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_login&client_id=5ca62169-f345-4c82-8ad9-0873d0d61e20&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=openid&response_type=code&prompt=login"; // This will reload and redirect to /profile-demo
                    }, 3000);
                    return json;
                  });
              } else {
                console.log("Register response:", json);
                return json;
              }
            });
        } else {
          // console.log("Login response:", json);
          ///decode the json
          const id_token = json.id_token;
          const decoded: AuthSession = jwtDecode(id_token);
          decoded.authenticated = true;
          storeSession(decoded);
          // setTimeout(() => {
          //   router.push("/");
          //   // got to that page and refresh it
          // }, 3000);
          setTimeout(() => {
            window.location.href = "/"; // This will reload and redirect to /profile-demo
          }, 3000);
          return json;
        }
      })
      .catch((error) => {
        console.error("Network or other error:", error);
      });
  }, [code]);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-xl">Authenticating</p>
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
