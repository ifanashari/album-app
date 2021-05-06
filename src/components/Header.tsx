import React, { useState } from "react";
import "../assets/css/Header.css";

interface HeaderProps {
  handleFilter: (keyword: string) => void;
}

const Header: React.SFC<HeaderProps> = ({ handleFilter }) => {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    handleFilter(keyword);
  }

  return (
    <div className="header d-flex w-100 py-5">
      <div className="m-auto text-center">
        <h1>Welcome to album-app</h1>
        <h3>Filter album</h3>

        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={keyword}
            placeholder="username | album name"
            onChange={e => setKeyword(e.target.value)}
          />
          <button type="submit" className="btn btn-success">
            find
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
