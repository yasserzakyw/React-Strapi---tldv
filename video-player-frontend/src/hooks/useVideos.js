import { useEffect, useState } from "react";
import axios from "axios";

const useVideos = () => {
  const [videosList, setVideosList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getVideosList = async () => {
    setIsFetching(true);

    return await axios
      .get("http://192.168.1.229:1337/api/videos")
      .then((response) => {
        setVideosList(response.data.data);
      })
      .catch((error) => {
        setIsFetching(false);
        console.warn("error:>>>", error.response);
      });
  };

  const getVideoDetails = async (videoId) => {
    return videosList.find((video) => video.id === parseInt(videoId));
  };

  useEffect(() => {
    getVideosList();
  }, []);

  useEffect(() => {
    if (videosList.length) setIsFetching(false);
  }, [videosList]);

  return { videosList, getVideosList, getVideoDetails, isFetching };
};

export default useVideos;
