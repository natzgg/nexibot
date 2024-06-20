export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const parseOpenAIResponse = (response) => {
  // Split the response by "0:" and filter out empty strings
  const words = response.split("0:").filter(Boolean);
  // Remove double quotes from each word
  const cleanWords = words.map((word) => word.replace(/"\s*|\s*"/g, "").trim());

  // Join the clean words to form a sentence
  const sentence = cleanWords
    .map((word, index, array) =>
      index < array.length - 1 && /[!?,.:;'"]$/.test(word) ? word.trim() : word
    )
    .join(" ")
    .replace(/\s+([!?,.:;'"])/g, "$1");

  //Fix the quotation is being replaced by "\"
  const qSentence = sentence.replace(/\\n/g, "\n").replace(/\\/g, '"');
  return qSentence.trim(); // Remove any leading or trailing whitespace
};
