import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import AuthLayout from "../AuthLayout";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { fetchUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
        username,
        email,
        password,
      });

      toast.success(`Welcome, ${res.data.user.username}!`); // ===user.username===
      await fetchUser();     //auto-login into context
      navigate("/");        // stay on landing (LOCKED UX)
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <AuthLayout title="Sign Up for Zerodha">
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        value={username}
        className="auth-input"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="email"
        value={email}
        className="auth-input"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        className="auth-input"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="auth-btn" type="submit">Sign Up</button>
    </form>
    </AuthLayout>
  );
}

export default SignUp;
