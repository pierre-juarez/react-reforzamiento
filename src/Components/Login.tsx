import { useEffect, useReducer } from "react";

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validating: true,
  token: null,
  username: "",
  name: "",
};

type LoginPayload = {
  username: string;
  name: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validating: false,
        token: null,
        username: "",
        name: "",
      };

    case "login":
      const { name, username } = action.payload;
      return {
        validating: false,
        token: "123JP",
        name,
        username,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validating, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const handleLogin = () => {
    dispatch({
      type: "login",
      payload: { name: "Pierre Juarez👾", username: "Pierre123" },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validating) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como {name}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      <div className="d-flex justify-content-center mb-4">
        {token ? (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </>
  );
};
