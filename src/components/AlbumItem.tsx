import React from "react";
import { Link } from "react-router-dom";
import AlbumInterface from "../interfaces/AlbumInterface";
import UserInterface from "../interfaces/UserInterface";

import "../assets/css/album-item.css";

interface AlbumItemProps {
  album: AlbumInterface;
  user?: UserInterface;
}

const AlbumItem: React.SFC<AlbumItemProps> = ({ album, user }) => {
  return (
    <div className="album-item">
      <img src={`https://picsum.photos/id/${album.id}/300/300`} alt="album" />
      <div className="album-content p-3">
        <Link to={`/albums/${album.id}`}>
          <h3>
            {album.id}:{album.title}
          </h3>
        </Link>
        {user && (
          <div className="album-user d-flex align-items-center">
            <div className="album-profil mr-2" />
            <Link to={`/users/${user ? user.id : 0}`}>{user.name || "-"}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumItem;
