import { useState, useContext, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { videoContext } from "../domain/videoContext";
export const VideoPlayer = () => {
  // Highly informed by this w3schools tutorial:
  // https://www.w3schools.com/react/react_forms.asp
  let { addQueueUrl, playing, setPlaying, secondsPlayed, setSecondsPlayed, current, nextVideo } = useContext(videoContext);
  const [playerUrl, setPlayerUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [showVideo, setShowVideo] = useState(true);
  const playerRef = useRef();

  useEffect(() => {
    setPlayerUrl(current.url);
  }, [current]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await addQueueUrl(inputUrl);
    setInputUrl("");
  };

  const toggleVideo = () => {
    setShowVideo((prev) => !prev);
  };

  const seekLastPlayed = () => {
    playerRef.current.seekTo(secondsPlayed, "seconds");
    setPlaying(true)
  }

  const videoStyle = {
    display: showVideo ? "block" : "none",
  };

  return (
    <div className="flex flex-col item-center w-full">
      <div
        style={videoStyle}
        className="max-h-[415px] aspect-video bg-black/85"
      >
        <div className="h-full aspect-video bg-black mx-auto">
          <ReactPlayer
          ref={playerRef}
            height={"100%"}
            width={"100%"}
            url={playerUrl} 
            playing={playing}
            controls
            progressInterval={100}
            onReady={() => seekLastPlayed()}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            onProgress={({ playedSeconds }) => setSecondsPlayed(playedSeconds)}
            onEnded={() => nextVideo()}
          />
        </div>
      </div>
      <form className="m-auto" onSubmit={handleSubmit}>
        <label>
          Enter a video URL:
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <input type="submit" />
        </label>
      </form>
      <button onClick={toggleVideo}>
        {showVideo ? "Switch to Audio" : "Switch to Video"}
      </button>
    </div>
  );
};
