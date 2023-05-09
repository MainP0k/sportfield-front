import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="Login">
      <button onClick={() => loginWithRedirect()}>Se connecter</button>
    </div>
  );
}

export default Login;