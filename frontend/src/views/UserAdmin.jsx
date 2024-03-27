import React from "react";

import AuthorizedUser from "./UserAdmin/AuthorizedUser.jsx";
import UnauthorizedUser from "./UserAdmin/UnauthorizedUser.jsx";
import UsersAdmin from "./UserAdmin/UsersAdmin.jsx";
function UserAdmin() {
  return (
    <div className=" flex flex-col  md:p-10 w-full h-screen  dark:text-white">
      <UnauthorizedUser />
      <AuthorizedUser />
      <UsersAdmin />
    </div>
  );
}

export default UserAdmin;
