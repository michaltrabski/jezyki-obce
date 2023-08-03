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

  const audio = `/${deAudio}.mp3`;

  return (
    <div className="row pb-3">
      <div className="col">
        <div>
          <audio src={audio} controls autoPlay={autoPlay} loop={loop}></audio>
        </div>
        <Tag>{de}</Tag>
        <p>{pl}</p>
      </div>
    </div>
  );
}
