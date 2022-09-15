import React, { useState, useEffect } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <>
      {photos.map((photos) => {
        return (
          <div>
            <h1>{photos.id}</h1>
            <h2>{photos.title}</h2>
            <span>{photos.thumbnailUrl}</span>
            <img src={photos.url} width="50px"></img>
          </div>
        );
      })}
    </>
  );
};

export default Photos;
