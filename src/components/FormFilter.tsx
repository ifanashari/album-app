import React, { useState } from "react";

interface FormFilterProps {
  handleFilter: (name: string, albumName: string) => void;
}

const FormFilter: React.SFC<FormFilterProps> = ({ handleFilter }) => {
  const [name, setName] = useState("");
  const [albumName, setAlbumName] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    handleFilter(name, albumName);
  }
  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="mb-2 col-md-5">
            <input
              type="text"
              className="form-control"
              value={name}
              placeholder="name"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-2 col-md-5">
            <input
              type="text"
              className="form-control"
              value={albumName}
              placeholder="album name"
              onChange={e => setAlbumName(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">
              find
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormFilter;
