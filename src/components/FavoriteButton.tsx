import React, { useState, useEffect } from "react";

const FavoriteButton: React.SFC<{ id: number; albumId: number }> = ({
  id,
  albumId
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleSetFavorite() {
    handleSetTolocalStorage();
    setIsFavorite(!isFavorite);
  }

  function handleSetTolocalStorage() {
    const getStorage = localStorage.getItem("listFavorite");
    let parsedStorage = getStorage ? JSON.parse(getStorage) : [];
    const listPhoto = parsedStorage.map((data: any) => data.id);
    const isExist = parsedStorage.length > 0 && listPhoto.includes(id);

    if (!isExist && !isFavorite) {
      parsedStorage.push({
        id,
        albumId
      });
    } else if (isExist) {
      parsedStorage.splice(listPhoto.indexOf(id), 1);
    }
    localStorage.setItem("listFavorite", JSON.stringify(parsedStorage));
  }

  useEffect(() => {
    const getStorage = localStorage.getItem("listFavorite");
    const parsedStorage = getStorage ? JSON.parse(getStorage) : [];
    const listPhoto = parsedStorage.map((data: any) => data.id);
    const isExist = parsedStorage && listPhoto.includes(id);
    if (isExist) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <button
      className="btn btn-danger text-white mb-2"
      onClick={handleSetFavorite}
    >
      {isFavorite ? "remove from favorite" : "add as favorite"}
    </button>
  );
};

export default FavoriteButton;
