import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Video from "~/assets/videos/download2.mp4";
import useVideoPlayes from "../hooks/useVideoPlayer";
import { faPause, faPlay, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);

const Videos = () => {
  const videoElement = useRef(null);
  const { player, togglePlay, handleOnTime, handleVideoProgress, toggleMute } =
    useVideoPlayes(videoElement);

  return (
    <div className={cx("container")}>
      <div className={cx("video-wrapper")}>
        <video src={Video} ref={videoElement} onTime={handleOnTime} />
      

      <div className={cx("controls")}>
        <div className={cx("actions")}>
          <button onClick={togglePlay}>
            {!player.isPlaying ? (
              <i className={cx("bx bx-play")} > <FontAwesomeIcon icon={faPlay} /> </i>
            ) : (
              <i className={("bx bx-pause")}> <FontAwesomeIcon icon={faPause} /></i>
            )}
          </button>
        </div>
            <input className={cx('input')}
                type="range"
                min="0"
                max="100"
                value={player.process}
                onChange={(e) => handleVideoProgress(e)}
            />

            <button className={cx("mute-btn")} onClick={toggleMute}>
                {!player.isMuted ? (
                    <i className= {cx("bx bxs-volume-full")} ><FontAwesomeIcon icon={faVolumeUp} /></i>
                ) : (
                    <i className={cx("bx bxs-volume-mute")}><FontAwesomeIcon icon={faVolumeMute} /></i>
                )}
            </button>
            

      </div>
      </div>
      
    </div>
  );
  
};

export default Videos;
