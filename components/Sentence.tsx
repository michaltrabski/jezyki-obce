import { PauseIcon } from "@/icons/PauseIcon";
import { PlayIcon } from "@/icons/PlayIcon";
import { useEffect, useRef, useState } from "react";

export interface Sentence {
  id: string;
  de: string;
  deAudio: string;
  pl: string;
  plAudio: string;
}

interface SentenceProps {
  sentence: Sentence;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  autoPlay?: boolean;
  loop?: boolean;
}

export default function Sentence(props: SentenceProps) {
  const { sentence, tag: Tag, autoPlay = false, loop = false } = props;
  const { id, de, deAudio, pl, plAudio } = sentence;

  const [isPlaying, setIsPlaying] = useState(false);

  const audio = `/${deAudio}.mp3`;

  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    console.log("play audioRef===", audioRef);
    audioRef.current?.play();
  };

  const pause = () => {
    console.log("pause audioRef===", audioRef);
    audioRef.current?.pause();
  };

  useEffect(() => {
    if (audioRef.current) {
      console.log("useEffect audioRef===", audioRef);
      audioRef.current.addEventListener("play", () => setIsPlaying(true));
      audioRef.current.addEventListener("pause", () => setIsPlaying(false));
    }
  }, []);

  return (
    <div className="row pb-3">
      <div className="col">
        <div className="position-relative">
          {/* isPlaying={isPlaying ? "true" : "false"} */}
          <Tag>{de}</Tag>
          {!isPlaying && (
            <div className="position-absolute" style={{ bottom: 0, left: "100%" }}>
              <button className="btn btn-primary" style={{ transform: "translate(-100%,0%)" }} onClick={play}>
                <PlayIcon />
              </button>
            </div>
          )}
          {isPlaying && (
            <div className="position-absolute" style={{ bottom: 0, left: "100%" }}>
              <button className="btn btn-primary" style={{ transform: "translate(-100%,0%)" }} onClick={pause}>
                <PauseIcon />
              </button>
            </div>
          )}
        </div>

        <div>
          <audio ref={audioRef} src={audio} controls autoPlay={autoPlay} loop={loop}></audio>
        </div>
        <p>{pl}</p>
      </div>
    </div>
  );
}
