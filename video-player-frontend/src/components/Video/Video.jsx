import React from "react";

const Video = (props) => {
  const { muted, controls, autoPlay, preload, src } = props;

  return (
    <video
      src={src}
      muted={muted}
      preload={preload}
      controls={controls}
      autoPlay={autoPlay}
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/ogg" />
    </video>
  );
};

export default Video;
