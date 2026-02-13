import React, { useEffect, useRef, useState } from 'react'
import '../styles/AudioPlayer.css'

// NOTE:
// Replace the import below with the actual path to your
// "Valentine - Laufey" audio file once you add it to the project,
// for example in src/assets/valentine-laufey.mp3.
// Example:
// import valentineTrack from '../assets/valentine-laufey.mp3'

const AUDIO_SRC = '/valentine-laufey.mp3'

function AudioPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error('Error playing audio:', err)
        })
    }
  }

  const handleVolumeChange = (e) => {
    const value = Number(e.target.value)
    setVolume(value)
    if (audioRef.current) {
      audioRef.current.volume = value
      if (value > 0 && muted) {
        setMuted(false)
        audioRef.current.muted = false
      }
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    const newMuted = !muted
    setMuted(newMuted)
    audioRef.current.muted = newMuted
  }

  return (
    <div className="audio-player no-select">
      <audio ref={audioRef} src={AUDIO_SRC} loop />

      <div className="audio-player__content">
        <div className="audio-player__meta">
          <span className="audio-player__label">Now playing</span>
          <span className="audio-player__title">Valentine - Laufey</span>
        </div>

        <div className="audio-player__controls">
          <button
            type="button"
            className="audio-player__button audio-player__button--play"
            onClick={togglePlay}
            disabled={!AUDIO_SRC}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>

          <div className="audio-player__volume">
            <button
              type="button"
              className="audio-player__button audio-player__button--volume"
              onClick={toggleMute}
              disabled={!AUDIO_SRC}
              aria-label="Toggle mute"
            >
              {muted || volume === 0 ? '🔇' : '🔊'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              className="audio-player__slider"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer

