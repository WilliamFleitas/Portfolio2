import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  reverseSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, typingSpeed = 100, reverseSpeed = 100 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 3000);
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    if (subIndex !== words[index].length + 1 && !reverse) {
      setTimeout(() => setSubIndex(subIndex + 1), typingSpeed);
    } else if (reverse) {
      setTimeout(() => setSubIndex(subIndex - 1), reverseSpeed);
    }
  }, [subIndex, index, reverse, words, typingSpeed,reverseSpeed ]);

  return (
    <div className="typewriter-effect h-6 min-h-6 m-0 text-primaryButtonColor text-start items-center justify-center flex flex-col">
      <span className='h-6 min-h-6'>{words[index].substring(0, subIndex)}</span>
    </div>
  );
};

export default Typewriter;