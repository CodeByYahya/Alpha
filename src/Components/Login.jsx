import { useState } from "react";
import "./LoginForm.css"; // Importing the CSS file
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (authFunction) => {
    try {
      authFunction(auth, email, password);
      alert("Login successful");
    } catch (error) {
      console.log(error);
    }
    console.log("Username:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form
        onSubmit={() => handleSubmit(signInWithEmailAndPassword)}
        className="login-form"
      >
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
