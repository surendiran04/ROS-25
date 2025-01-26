import React, { useState } from 'react';
import { IoPlay, IoPause } from "react-icons/io5";
import audioSource from '@/assets/bgmusic/shield_ros.mp3';

const BackgroundAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioLoaded = () => {
    setAudioLoaded(true);
  };

  return (
    <div className='fixed bottom-0 right-0 p-3 sm:p-4 m-5 rounded-xl bg-pink-600 text-white font-extrabold text-2xl z-10'>
      <div id="audio-controls" className='flex ml-auto'>
        <button className='AudioButton' onClick={togglePlay}>{isPlaying ? <IoPause id='icon' /> : <IoPlay id='icon' />}</button>
        <audio id="backgroundAudio" loop onLoadedData={handleAudioLoaded}>
          <source src={audioSource} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        {!audioLoaded && (
          <button className='AudioButton' onClick={togglePlay}></button>
        )}
      </div>
    </div>
  );
};

export default BackgroundAudioPlayer;
