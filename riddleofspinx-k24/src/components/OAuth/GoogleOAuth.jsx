import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";

import { AuthContext } from "@/context/AuthContext";

function GoogleOAuth({ }) {
  const { handleGoogleOAuth } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center">
      <GoogleLogin
        onSuccess={(credentials) => {
          handleGoogleOAuth({
            accessId: credentials.credential,
          });
        }}
        onFailure={(credentials) => {
          toast.error("Error authenticating through Google OAuth");
        }}
        scope="https://www.googleapis.com/auth/userinfo.email"
      />
    </div>
  );
}

export default GoogleOAuth;
