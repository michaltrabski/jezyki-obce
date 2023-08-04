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

  const [isReactReady, setIsReactReady] = useState(false);
  useEffect(() => setIsReactReady(true), []);

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
          {!isReactReady && (
            <Tag>
              {de}
              <i className="ms-3 bi bi-play-circle"></i>
            </Tag>
          )}

          {isReactReady && (
            <button className="btn" onClick={isPlaying? pause :play}> 
              <Tag>
                {de}
                <i className={`ms-3 bi bi-${isPlaying? "pause": "play"}-circle`}></i>
              </Tag>
            </button>
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
