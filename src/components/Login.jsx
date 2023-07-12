import { useLoginStore } from "../store/useLogin";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const login = useLoginStore((state) => state.login);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/admin");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />

        <button type="submit" className="login-btn">
          Login
        </button>
        <Link to="/info">
          <button className="login-btn">Preview</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
