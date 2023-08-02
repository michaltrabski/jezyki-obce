// export const metadata: Metadata = {
//   title: "tytuł strony głównej",
//   description: "opis strony głównej",
// };

import { lista1 } from "@/data/lista1";

export interface List {
  id: string;
  de: string;
  deAudio: string;
  pl: string;
  plAudio: string;
}

const sentences = lista1;

export default function Home() {
  

  const sentence = sentences[0];
  const { id, de, deAudio, pl, plAudio } = sentence;

  const audio = `/${deAudio}.mp3`;

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
            <button type="button" className="btn btn-danger">
              nie znam
            </button>
            <button type="button" className="btn btn-success">
              znam
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
