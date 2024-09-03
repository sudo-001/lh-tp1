import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isUserConected, setIsUserConected] = React.useState(false);

  React.useEffect(() => {
    // window.alert("Hello !");
    console.log("Hello !");
  }, []);

  React.useEffect(() => {
    console.log(isUserConected);
  }, [isUserConected]);

  function toggleUserConnectedState() {
    setIsUserConected(!isUserConected);
  }

  return (
    <div className="flex w-full bg-cyan-600 justify-between">
      <div>LOGO</div>
      <div className="flex gap-x-4">
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
        <button onClick={toggleUserConnectedState}>Change state</button>
      </div>

      {isUserConected === true ? (
        <div>Welcome back</div>
      ) : (
        <div className="flex gap-x-4">
          <button>Signin</button>
          <button>Signup</button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
