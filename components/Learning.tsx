import { useState } from "react";

export interface Sentence {
  id: string;
  de: string;
  deAudio: string;
  pl: string;
  plAudio: string;
}

interface LearningProps {
  sentences: Sentence[];
}

export default function Learning(props: LearningProps) {
  const { sentences } = props;

  const [index, setIndex] = useState(0);

  const sentence = sentences[index];
  const { id, de, deAudio, pl, plAudio } = sentence;

  const audio = `/${deAudio}.mp3`;

  const handleVote = (vote: "KNOWN" | "UNKNOWN") => {
    const randomIndex = Math.floor(Math.random() * sentences.length);

    
    setIndex(() => randomIndex);
  }

  return (
    <main>
      <div className="row pb-3">
        <div className="col text-center">
          <div>
            <button className="btn btn-primary">PLAY</button>
          </div>
          <div>
            <audio src={audio} controls></audio>
          </div>
          <h1>{de}</h1>
          <p>{pl}</p>
        </div>
      </div>

      <div className="row pb-3">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={() =>handleVote("UNKNOWN")}>
              nie znam
            </button>
            <button type="button" className="btn btn-success" onClick={() =>handleVote("KNOWN")}>
              znam
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
