import React, { useContext, useEffect, useState, Fragment } from "react";
import { userContext } from "../App";
import Loading from "../Loading";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const cntxt = useContext(userContext);

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    fetchingData();
  }, [cntxt.user]);

  const fetchingData = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${cntxt.user.id}`)
      .then((data) => data.json())
      .then((json) => setAlbums(json));
  };

  const renderAlbums = () => {
    if (!albums.length) {
      return <Loading />;
    }
    return albums.map((item) => (
      <div id={"album_" + item.id} key={item.id}>
        {item.title}
      </div>
    ));
  };

  return <Fragment>{renderAlbums()}</Fragment>;
};

export default Albums;
