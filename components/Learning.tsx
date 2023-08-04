"use client";
import { useState } from "react";
import Sentence from "./Sentence";

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

  const [index, setIndex] = useState(() => Math.floor(Math.random() * sentences.length));

  const sentence = sentences[index];
  const { id, de, deAudio, pl, plAudio } = sentence;

  const audio = `/${deAudio}.mp3`;

  const handleVote = (vote: "KNOWN" | "UNKNOWN") => {
    let randomIndex = 0;

    do {
      randomIndex = Math.floor(Math.random() * sentences.length);
    } while (randomIndex === index);

    setIndex(() => randomIndex);
  };

  return (
    <main>
      <Sentence sentence={sentence} tag="h1" autoPlay={true} loop={false}/>

      <div className="row pb-3">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={() => handleVote("UNKNOWN")}>
              nie znam
            </button>
            <button type="button" className="btn btn-success" onClick={() => handleVote("KNOWN")}>
              znam
            </button>
          </div>
        </div>
      </div>

      <hr/>

      <div className="row pb-3">
        <div className="col">
          <div className="text-start">
            <h2>Cała lista zdań do nauki: ({sentences.length})</h2>

            {sentences.map((sentence) => (
              <Sentence key={sentence.id} sentence={sentence} tag="h3"/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
