interface WordExplanation {
    german: string;
    translation: string;
    explanation: string;
    example: string;
  }
  
  const wordExplanations: WordExplanation[] = [
    {
      german: "Ich",
      translation: "Ja",
      explanation: "Osoba pierwsza liczby pojedynczej (ja).",
      example: "Ich lese gerne Bücher. (Lubię czytać książki.)",
    },
    {
      german: "möchte",
      translation: "chciałbym",
      explanation: "Forma czasownika 'mögen' oznaczająca życzenie lub chęć.",
      example: "Ich möchte ein Eis. (Chciałbym loda.)",
    },
    {
      german: "eine",
      translation: "jedną",
      explanation: "Nieokreślony artykuł w rodzaju żeńskim.",
      example: "Ich habe eine Schwester. (Mam jedną siostrę.)",
    },
    {
      german: "Tasse",
      translation: "filiżankę",
      explanation: "Pojemnik do picia, zwykle na gorące napoje.",
      example: "Trinkst du deinen Kaffee in einer Tasse? (Czy pijesz swoją kawę w filiżance?)",
    },
    {
      german: "heißen",
      translation: "gorącej",
      explanation: "Czasownik oznaczający 'być nazywanym'.",
      example: "Er heißt Peter. (On nazywa się Piotr.)",
    },
    {
      german: "Kaffee",
      translation: "kawy",
      explanation: "Napój sporządzany z ziaren kawowca.",
      example: "Morgens trinke ich immer eine Tasse Kaffee. (Rano zawsze pijam filiżankę kawy.)",
    },
  ];
  
  export default wordExplanations;