import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useVideos from "../../hooks/useVideos";
import Video from "../Video/Video";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const VideoDetails = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const { videosList, getVideoDetails } = useVideos();

  useEffect(() => {
    if (videosList.length) getVideoDetails(id).then((data) => setVideo(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videosList]);

  return (
    <div className="container">
      {!video && <LoadingSpinner />}

      {video && (
        <div className="video-detail-container">
          <h2>{video.attributes.title}</h2>

          <div className="video-card flex">
            <Video
              muted={true}
              preload="auto"
              controls={true}
              autoPlay={true}
              src={`http://localhost:1337/${video.attributes.url}`}
            />
          </div>

          <h3>{video.attributes.description}</h3>
        </div>
      )}
    </div>
  );
};

export default VideoDetails;
