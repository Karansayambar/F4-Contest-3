// import { createContext, useState } from "react";
// import "./style.css";
// import Input from "../Input/input";
// import Button from "../Button/Button";
// export const UserContext = createContext();
// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState(false);
//   const [useData, setUseData] = useState(null);
//   const handleSubmit = (e) => {
//     if (
//       name === "" ||
//       email === "" ||
//       password === "" ||
//       confirmPassword === ""
//     ) {
//       setErrorMsg("Error : All the fields are mandatory");
//     } else {
//       // Here you can handle form submission
//       setErrorMsg(""); // Reset error message
//       setUseData({ name, email, password });
//       window.location.href = "/Profile"; // Redirect to Profile page using window.location
//     }
//     e.preventDefault();
//   };
//   return (
//     <UserContext.Provider value={name}>
//       <div className="signup">
//         <form className="form">
//           <p className="font">Signup</p>
//           <Input
//             type="text"
//             state={name}
//             placeholder="Full Name"
//             setState={setName}
//           />
//           <Input
//             type="email"
//             state={email}
//             placeholder="Email"
//             setState={setEmail}
//           />
//           <Input
//             type="password"
//             state={password}
//             placeholder="Password"
//             setState={setPassword}
//           />
//           <Input
//             type="password"
//             state={confirmPassword}
//             placeholder="Confirm Password"
//             setState={setConfirmPassword}
//           />
//           {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}{" "}
//           {/* Render error message if present */}
//           <button onClick={handleSubmit}>SignUp</button>
//         </form>
//       </div>
//     </UserContext.Provider>
//   );
// };
// export default Signup;
import React, { useState } from "react";
import Input from "../Input/input";
import "./style.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Error: All fields are mandatory");
    } else if (password !== confirmPassword) {
      setError("Error: Passwords do not match");
    } else {
      // Mock implementation to generate access token
      const accessToken = Math.random().toString(36).substring(2, 18);
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email, password, accessToken })
      );
      // history.push("/profile");
      window.location.href = "/Profile";
    }
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          setState={setName}
          placeholder="Full Name"
        />
        <Input
          type="email"
          value={email}
          setState={setEmail}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          setState={setPassword}
          placeholder="Password"
        />
        <Input
          type="password"
          value={confirmPassword}
          setState={setConfirmPassword}
          placeholder="Confirm Password"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
