import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Clear the interval when the text is fully displayed
      }
    }, 15); // Typing speed (adjustable)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [text, currentIndex]);

  return <span>{displayedText}</span>;
};

export default TypingAnimation;
