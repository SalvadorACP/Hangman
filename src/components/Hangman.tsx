import { useState, useEffect } from 'react';
import '../css/hangmanComponent.css'
interface HangmanProps {
    words: string[];
    hints: { [word: string]: string };
}

const Hangman = ({ words, hints }: HangmanProps) => {
    const [selectedWord, setSelectedWord] = useState<string>(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState<number>(0);

    useEffect(() => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setErrorCount(0);
    }, [words]);

    const displayWord = selectedWord.split('').map((letter) => {
        if (guessedLetters.includes(letter)) {
        return letter;
        } else {
        return '_';
        }
    });

const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
    setGuessedLetters([...guessedLetters, letter]);
    if (!selectedWord.includes(letter)) {
        setErrorCount((prev) => prev + 1);
    }
    }
};

const restartGame = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setErrorCount(0);
};

return (
    <div className="hangman-container">
            <p className="word-display">{displayWord.join(' ')}</p>
            <p className="hint">Hint: {hints[selectedWord]}</p>
            <input
                maxLength={1}
                className="guess-input"
                onChange={(e) => handleGuess(e.target.value)}
            />
            {(displayWord.join('') === selectedWord || errorCount > 5) && (
                <button className="new-word-button" onClick={restartGame}>Select New Word</button>
            )}
            <p className="error-count">Error count: {errorCount}</p>
            {displayWord.join('') === selectedWord && (
                <p className="win-message">You won in this round</p>
            )}
        </div>
    );
};

export default Hangman;

