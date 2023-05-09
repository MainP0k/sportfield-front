import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
  const { logout } = useAuth0();

  return (
    <div className="Logout">
      <button onClick={() => logout({ returnTo: window.location.origin })}>Se déconnecter</button>
    </div>
  );
}

export default Logout;