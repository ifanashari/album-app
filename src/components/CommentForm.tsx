import React, { useState, useEffect } from "react";

const CommentForm: React.SFC<{ id: Number }> = ({ id }) => {
  const [listComment, setListComment] = useState<String[]>([]);
  const [comment, setComment] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    handleSetTolocalStorage();
    let getListComment = listComment;
    getListComment.push(comment);
    setListComment(getListComment);
    setComment("");
  }

  function handleSetTolocalStorage() {
    const getStorage = localStorage.getItem("listComment");
    let parsedStorage = getStorage ? JSON.parse(getStorage) : [];
    const listPhoto = parsedStorage.map((data: any) => data.id);
    const isExist = parsedStorage.length > 0 && listPhoto.includes(id);
    const indexOfPhoto = listPhoto.indexOf(id);
    let tmpListComment = [...listComment, comment];

    if (!isExist) {
      parsedStorage.push({
        id,
        comment: tmpListComment
      });
    } else {
      parsedStorage[indexOfPhoto].comment = tmpListComment;
    }
    localStorage.setItem("listComment", JSON.stringify(parsedStorage));
  }

  useEffect(() => {
    const getStorage = localStorage.getItem("listComment");
    let parsedStorage = getStorage ? JSON.parse(getStorage) : [];
    const listPhoto = parsedStorage.map((data: any) => data.id);
    const isExist = parsedStorage.length > 0 && listPhoto.includes(id);
    const indexOfComment = listPhoto.indexOf(id);
    if (isExist) {
      setListComment(parsedStorage[indexOfComment].comment);
    }
  }, []);

  return (
    <div className="comment p-3">
      {listComment.map((data: String, index) => (
        <div key={index} className="mb-3">
          {">"} {data}
        </div>
      ))}
      <form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="type your comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />

        <button type="submit" className="btn btn-default">
          post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
