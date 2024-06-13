import { useAuth0 } from "@auth0/auth0-react";

const Button = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? <button onClick={() => logout()}>Logout <i class="fa-solid fa-right-from-bracket"></i></button> : <button onClick={() => loginWithRedirect()}>Login <i class="fa-solid fa-right-to-bracket"></i></button>}
    </div>
  );
};

export default Button;
