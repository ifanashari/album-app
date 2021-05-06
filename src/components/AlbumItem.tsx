import React from "react";
import { Link } from "react-router-dom";
import AlbumInterface from "../interfaces/AlbumInterface";
import UserInterface from "../interfaces/UserInterface";

import "../assets/css/AlbumItem.css";

interface AlbumItemProps {
  album: AlbumInterface;
  user: UserInterface;
}

const AlbumItem: React.SFC<AlbumItemProps> = ({ album, user }) => {
  return (
    <div className="album-item mb-3">
      <img src={`https://picsum.photos/id/${album.id}/300/300`} alt="album" />
      <div className="album-content p-3">
        <Link to={`/albums/${album.id}`}>
          <h3>
            {album.id}:{" "}
            {/* {album.title.length > 10
              ? `${album.title.substring(0, 10)} ...`
              : album.title} */}
            {album.title}
          </h3>
        </Link>
        <div className="album-user">
          <div className="album-profil" />
          <Link to={`/users/${user ? user.id : 0}`}>
            {user ? user.name : "-"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
