import { Sentence } from "@/components/Learning";

// chat gpt 
// Przetłumacz podane zdania na język niemiecki, angielski, hiszpański oraz norweski.

// Odpowiedzi podaj jako tablica obiektów w języku typescript.
// export interface Sentence {
//   id: string; // example: 0b48-4b5c-a8b9
//   pl: string;
//   en: string;
//   de: string;
//   no: string;
//   es: string;
// }
 
// Zdania do przetłumaczenia:
// Wczoraj kupiłem nowy komputer i telefon.
// Często jeżdzę na rowerze.
// Jestem silniejszy niż mój kolega.



interface NewSentence {
  id: string;
  pl: string;
  en: string;
  de: string;
  no: string;
  es: string;
}

export const sentences: NewSentence[] = [
  {
    id: "0b48-4b5c-a8b9",
    pl: "Wczoraj kupiłem nowy komputer i telefon.",
    en: "Yesterday I bought a new computer and phone.",
    de: "Gestern habe ich einen neuen Computer und ein Telefon gekauft.",
    no: "I går kjøpte jeg en ny datamaskin og telefon.",
    es: "Ayer compré una nueva computadora y un teléfono."
  },
  {
    id: "2e7f-9a3d-c6e2",
    pl: "Często jeżdzę na rowerze.",
    en: "I often ride a bicycle.",
    de: "Ich fahre oft Fahrrad.",
    no: "Jeg sykler ofte.",
    es: "A menudo ando en bicicleta."
  },
  {
    id: "7c3a-1b9e-f4d5",
    pl: "Jestem silniejszy niż mój kolega.",
    en: "I am stronger than my friend.",
    de: "Ich bin stärker als mein Freund.",
    no: "Jeg er sterkere enn vennen min.",
    es: "Soy más fuerte que mi amigo."
  }
];