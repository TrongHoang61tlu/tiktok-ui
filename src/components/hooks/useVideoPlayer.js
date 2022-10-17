import { useState, useEffect } from "react";

const useVideoPlayes = (videoElement)=> {
    const [player, setPlayer] =useState({
        isPlaying: true,
        process: 0,
        isMuted: false,
    });

    const togglePlay = () => {
        setPlayer({
            ...player,
            isPlaying: !player.isPlaying,
        });
    };

    useEffect(() => {
        player.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    },[player.isPlaying, videoElement]);


    const handleOnTime = () =>{
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setPlayer({
            ...player,
            progress,
        });
    };


    const handleVideoProgress =(event) => {
        const manualChange = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        setPlayer({
            ...player,
            progress : manualChange,
        });
    };


    const toggleMute = () => {
        setPlayer({
            ...player,
            isMuted: !player.isMuted,
        });
    };

    useEffect(()=>{
        player.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
    },[player.isMuted, videoElement]);


    return {
        player,
        togglePlay,
        handleOnTime,
        handleVideoProgress,
        toggleMute,
    }


};
export default useVideoPlayes;