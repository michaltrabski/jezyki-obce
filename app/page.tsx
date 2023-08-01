// export const metadata: Metadata = {
//   title: "tytuł strony głównej",
//   description: "opis strony głównej",
// };

const data = [{
  text: "Ich gehe mit vier Kindern in den Windkanal.",
  textMp3Slug: "ich-gehe-mit-vier-kindern-in-den-windkanal",
  translation: "Jadę do tunelu aerodynamicznego z czwórką dzieci.",
}]
export default function Home() {

  
  return (
    <main>
       

      <div className="row pb-3">
        <div className="col text-center">
          <div><button className="btn btn-primary">PLAY</button></div>
          <div><audio src={`/${"ich-gehe-mit-vier-kindern-in-den-windkanal"}.mp3`} controls></audio></div>
          <h1>Ich gehe mit vier Kindern in den Windkanal.</h1>
          <p>Jadę do tunelu aerodynamicznego z czwórką dzieci.</p>
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
