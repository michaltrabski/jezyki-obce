// export const metadata: Metadata = {
//   title: "tytuł strony głównej",
//   description: "opis strony głównej",
// };

import Learning from "@/components/Learning";
import { lista1 } from "@/data/lista1";

const sentences = lista1;

export default function Home() {
  return (
    <main>
      <Learning sentences={sentences} />
    </main>
  );
}
