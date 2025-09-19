import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  return (
    <>
      <h3>Login Page</h3>
      {authStatus === "authenticated" ? (
        <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No Autenticado</div>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("ismael@gmail.com", "123456")}>
          Login
        </button>
      )}
    </>
  );
};
