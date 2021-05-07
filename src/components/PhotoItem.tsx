import React from "react";
import "../assets/css/photo-item.css";
import PhotoInterface from "../interfaces/PhotoInterface";
import CommentForm from "./CommentForm";
import FavoriteButton from "./FavoriteButton";

interface PhotoItemProps {
  photo: PhotoInterface;
}

const PhotoItem: React.SFC<PhotoItemProps> = ({ photo }) => {
  return (
    <div className="photo-item">
      <img src={photo.url} alt={photo.thumbnailUrl} />
      <div className="photo-content p-3">
        <h3>
          {photo.id}:{photo.title}
        </h3>

        <FavoriteButton id={photo?.id} albumId={photo?.albumId} />

        <CommentForm id={photo.id} />
      </div>
    </div>
  );
};

export default PhotoItem;
