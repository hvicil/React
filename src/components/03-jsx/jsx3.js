import React from "react";

const Jsx3 = () => {
  const isAdmin = false;

  // Comment satiri
  return (
    <>
      {/* Comment */}
      {isAdmin ? (
        <>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create user</li>
            <li>Update user</li>
            <li>Delete user</li>
          </ul>
        </>
      ) : (
        <>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Jsx3;
