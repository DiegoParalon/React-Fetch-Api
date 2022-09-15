import React, { useEffect, useState } from "react";

import Loading from "../components/Loading";

const Albuns = () => {
  const [isloading, setIsLoading] = useState(false);
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setAlbuns(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Loading visible={isloading} />

      {albuns.map((albums) => {
        return (
          <div>
            <h3>Titulo:{albums.title}</h3>
            <h2> id: {albums.id}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Albuns;
