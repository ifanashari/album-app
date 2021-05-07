import React from "react";
import UserInterface from "../interfaces/UserInterface";

const UserSection: React.SFC<{ user?: UserInterface | null }> = ({ user }) => {
  function handleVisitCompany(link: string) {
    window.location.href = link;
  }
  return (
    <div className="container mt-5">
      {user && (
        <div className="row align-items-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="user-propic" />
          </div>

          <div className="col-md-8">
            <h3 className="font-weight-bold">{user.name}</h3>
            <h5 className="font-weight-bold">username | {user.username}</h5>
            <p>
              {user.phone}
              <br />
              {user.address.city}, {user.address.street}, {user.address.suite},{" "}
              {user.address.zipcode}
            </p>

            <h5>Company</h5>

            <p>
              {user.company.name}({user.company.catchPhrase}).
              <br />
              <i>{user.website}</i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSection;
