import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useVideos from "../../hooks/useVideos";
import Video from "../Video/Video";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const VideosList = () => {
  const { videosList, isFetching } = useVideos();

  useEffect(() => {
    document.body.classList.toggle("--loading", isFetching);
  }, [isFetching]);

  return (
    <>
      {isFetching && <LoadingSpinner />}

      {!isFetching && !videosList.length && (
        <>
          <h2>Nothing to display here. 🤷🏻‍♂️</h2>
          <h3>
            First, please go setup the database from the Admin panel, and come
            back later 😉
          </h3>
        </>
      )}

      {!isFetching && videosList && (
        <>
          <div className="videos-container flex wrap justify--center">
            {videosList.map((video, index) => {
              const { id, attributes } = video;
              const { url, title, description } = attributes;

              return (
                <Link className="video-card" to={`/video/${id}`} key={id}>
                  <Video
                    muted={true}
                    controls={false}
                    autoPlay={false}
                    preload="metedata"
                    src={`http://localhost:1337/${url}`}
                  />

                  <div className="video-information">
                    <h3 className="video-title">{title}</h3>

                    <h4 className="video-description">{description}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default VideosList;
