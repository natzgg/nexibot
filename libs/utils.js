export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const parseOpenAIResponse = (response) => {
  // Split the response by "0:" and filter out empty strings
  const words = response.split("0:").filter(Boolean);
  // Remove double quotes from each word
  const cleanWords = words.map((word) => word.replace(/"/g, "").trim());

  // Join the clean words to form a sentence
  const sentence = cleanWords.join(" ").replace(/\s+([!?,.:;'"])/g, "$1");
  return sentence.trim(); // Remove any leading or trailing whitespace
};
