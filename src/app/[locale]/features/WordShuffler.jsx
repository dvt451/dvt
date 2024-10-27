'use client'
import React, { useEffect, useRef } from 'react';

const WordShuffler = ({ text, textColor, timeOffset, mixCapital, buttonActive, symbol }) => {
  const holderRef = useRef(null);

  useEffect(() => {
    const holder = holderRef.current;

    const getRandCharacter = (characterToReplace) => {
      if (characterToReplace === ' ') {
        return ' ';
      }

      const specialCharacters = [
        'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X',
        'Y', 'Z',
        '!', '§', '$', '%',
        '&', '/', '(', ')',
        '=', '?', '_', '<',
        '>', '^', '°', '*',
        '#', '-', ':', ';', '~'
      ];
      const chars = [
        '!', '§', '$', '%',
        '&', '/', '(', ')',
        '=', '?', '_', '<',
        '>', '^', '°', '*',
        '#', '-', ':', ';', '~'
      ];
      const randNum = Math.floor(Math.random() * (symbol === true ? chars.length : specialCharacters.length));
      const lowChoice = -.5 + Math.random();
      let picketCharacter = symbol === true ? chars[randNum] : specialCharacters[randNum];
      let choosen = picketCharacter.toLowerCase();
      if (mixCapital) {
        choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
      }
      return choosen;
    };

    const generateSingleCharacter = (color, character) => {
      const span = document.createElement('span');
      span.innerHTML = character;
      return span;
    };

    const writeWord = (word) => {
      const currentWord = word.split('');
      const currentWordLength = currentWord.length;

      let currentTimeOffset = 0;
      let currentCharacter = 0;

      const interval = setInterval(() => {
        currentTimeOffset++;
        let newWord = [];

        if (currentTimeOffset === timeOffset && currentCharacter !== currentWordLength) {
          currentCharacter++;
          currentTimeOffset = 0;
        }

        for (let k = 0; k < currentCharacter; k++) {
          newWord.push(currentWord[k]);
        }

        for (let i = 0; i < currentWordLength - currentCharacter; i++) {
          newWord.push(getRandCharacter(currentWord[currentCharacter + i]));
        }

        holder.innerHTML = '';
        newWord.forEach((w, index) => {
          const color = index > textColor;
          holder.appendChild(generateSingleCharacter(color, w));
        });

        if (currentCharacter === currentWordLength) {
          clearInterval(interval);
        }
      }, 100); // Adjust speed here
    };

    writeWord(text);
  }, [text, textColor, timeOffset, mixCapital, symbol]); // Added 'symbol' to the dependency array

  return <span className={buttonActive ? 'shuffle-text layer-active' : 'shuffle-text'} ref={holderRef} />;
};

export default WordShuffler;
