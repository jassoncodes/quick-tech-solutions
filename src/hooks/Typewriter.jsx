import { useEffect, useState } from 'react';

export function useTypewriter({
    texts,
    typingDelay = 80,
    pauseDelay = 1500,
    loop = false,
})
{
    const textArray = Array.isArray(texts) ? texts : [texts];

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() =>
    {
        const currentText = textArray[textIndex];
        let timeout;

        if (charIndex < currentText.length)
        {
            // Typing effect
            timeout = setTimeout(() =>
            {
                setDisplayText(prev => prev + currentText[charIndex]);
                setCharIndex(prev => prev + 1);
            }, typingDelay);
        } else
        {
            // End of word
            timeout = setTimeout(() =>
            {
                if (textIndex < textArray.length - 1)
                {
                    setTextIndex(prev => prev + 1);
                    setCharIndex(0);
                    setDisplayText('');
                } else if (loop)
                {
                    setTextIndex(0);
                    setCharIndex(0);
                    setDisplayText('');
                }
            }, pauseDelay);
        }

        return () => clearTimeout(timeout);
    }, [
        charIndex,
        textIndex,
        textArray,
        typingDelay,
        pauseDelay,
        loop,
    ]);

    return displayText;
}
