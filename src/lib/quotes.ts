export const QUOTES: { text: string; author: string }[] = [
  { text: "Não é que tenhamos pouco tempo, mas que perdemos muito dele.", author: "Sêneca" },
  { text: "Você poderia deixar a vida agora mesmo. Que isso determine o que você faz, diz e pensa.", author: "Marco Aurélio" },
  { text: "Lembre-se: você é mortal. Memento mori.", author: "Marco Aurélio" },
  { text: "Enquanto adiamos a vida, ela passa.", author: "Sêneca" },
  { text: "Não são as coisas que perturbam os homens, mas a opinião que têm delas.", author: "Epicteto" },
  { text: "Toda noite, antes de dormir, lembre-se: amanhã pode não chegar.", author: "Marco Aurélio" },
  { text: "Comece já a viver, e conte cada dia como uma vida separada.", author: "Sêneca" },
  { text: "A felicidade da sua vida depende da qualidade dos seus pensamentos.", author: "Marco Aurélio" },
  { text: "Não exija que os acontecimentos sigam seus desejos. Aceite-os como acontecem.", author: "Epicteto" },
  { text: "A vida é longa o bastante, se soubermos usá-la.", author: "Sêneca" },
  { text: "O tempo é o bem mais precioso que possuímos, pois é o único que não se recupera.", author: "Sêneca" },
  { text: "Confine-se ao presente.", author: "Marco Aurélio" },
];

export function getDailyQuote() {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const idx = (day + Math.floor(Math.random() * QUOTES.length)) % QUOTES.length;
  return QUOTES[idx];
}
