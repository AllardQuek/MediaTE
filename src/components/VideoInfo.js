const VideoInfo = () => {
  return (
    <div align="left" className="text-container">
      <p>
        Max Video Size: <strong>10MB</strong>
      </p>
      <p>We recommend that you pick short video. Less than 10s will do! :)</p>
      <p>Your video must have a face in every frame!</p>
      <p>
        Don't have a video with you? Download one{" "}
        <a
          href="https://drive.google.com/drive/folders/1IT7qzq-z5cxpZHn4pfRvFoAC2jFUONK6?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here!
        </a>
      </p>
    </div>
  );
};

export default VideoInfo;
