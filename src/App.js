import React, { useState, useEffect } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";

//const auth = "AIzaSyDno7uebxqEj2tkvcmVj2Xkm8hpn27oGAI";
//const baseUrl = "https://youtube.googleapis.com/youtube/v3";
const baseUrl = "http://127.0.0.1:8080";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseUrl}/videos`, requestOptions)
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
