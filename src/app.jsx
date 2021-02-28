import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube //
      .search(query)
      .then((videos) => setVideos(videos))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    youtube //
      .mostPopular()
      .then((videos) => setVideos(videos))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
