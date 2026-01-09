import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import AuthLayout from "../AuthLayout";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { fetchUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        username,
        password,
      });

      if (res.data.user.lastLogin) {
        toast.success(
          `Welcome back, ${res.data.user.username}! \n  Last login: ${new Date(res.data.user.lastLogin).toLocaleString()}`
        );
      } else {
        toast.success(`Welcome, ${res.data.user.username}!`);
      }
      await fetchUser();   //  update global auth state
      navigate("/");       // stay on landing page
    } catch (err) {
      toast.error("Invalid username or password");
    }
  };

  return (
    <AuthLayout title="Login into Zerodha">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          className="auth-input"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          className="auth-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-btn" type="submit">Login</button>
      </form>
    </AuthLayout>
  );
}

export default Login;
