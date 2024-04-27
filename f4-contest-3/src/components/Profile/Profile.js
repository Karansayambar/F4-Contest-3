// import { useContext } from "react";
// import { UserContext } from "../Signup/SignUp";
// // import { UserContext } from "../Signup/Signup"; // Corrected import path

// import "./style.css";
// const Profile = () => {
//   const { name, email, password } = useContext(UserContext);

//   return (
//     <div className="profile">
//       <p>Profile</p>

//       <p>Full Name: {name}</p>
//       <p>Email: {email}</p>
//       <p>Password: {password}</p>

//       <button>Logout</button>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from "react";
import "./style.css";
// import { useHistory } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  // const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData || !userData.accessToken) {
      // history.push("/");
      window.location.href = "/";
    } else {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // history.push("/");
    window.location.href = "/";
  };

  return (
    <div className="profile">
      <p className="font">Profile</p>
      {user && (
        <div>
          <p>Full Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
