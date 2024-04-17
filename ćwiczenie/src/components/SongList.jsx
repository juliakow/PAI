import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const fetchSongs = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/techniadrian/c39f844edbacee0439bfeb107227325b/raw/81eec7847b1b3dfa1c7031586405c93e9a9c1a2d/songs.json"
  );
  const responseBody = await response.json();
  return responseBody;
};

const SongList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [songs, setSongs] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setIsFetching(true);

    fetchSongs()
      .then((data) => {
        setSongs(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="song-list">
      {isFetching && <Spinner />}
      {!isFetching && songs !== undefined && (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.title} {song.genre}
            </li>
          ))}
        </ul>
      )}
      {!isFetching && Boolean(error) && <span>{String(error)}</span>}
    </div>
  );
};

export default SongList;
