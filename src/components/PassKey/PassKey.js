import { useState, useCallback, useEffect, useRef } from 'react';
import "../../styles/Passkey.css"

function PassKey() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numberAllowed) str += '0123456789';
        if (charAllowed) str += '!@#$%^&*()_+`~-=[]{}|;:,.<>?/';

        for (let i = 0; i < length; i++) {
            let charIndex = Math.floor(Math.random() * str.length);
            pass += str.charAt(charIndex);
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        if (passwordRef.current) {
            passwordRef.current.select();
            passwordRef.current.setSelectionRange(0, 100);
            window.navigator.clipboard.writeText(password);
        }
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    return (
        <div className="container">
            <div className="card">
                <h2 className="title">Password Generator</h2>
                <div className="input-container">
                    <input type="text" value={password} className="password-input" readOnly ref={passwordRef} />
                    <button onClick={copyPasswordToClipboard} className="copy-button">Copy</button>
                </div>
                <div className="controls">
                    <div className="slider-checkbox-container">
                        <div className="slider-container">
                            <input
                                type="range"
                                min={6}
                                max={100}
                                value={length}
                                className="slider"
                                onChange={(e) => setLength(parseInt(e.target.value, 10))}
                            />
                            <span className="label">Length: {length}</span>
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" checked={numberAllowed} id="numberInput" onChange={() => setNumberAllowed((prev) => !prev)} />
                            <label htmlFor="numberInput">Numbers</label>
                            <input type="checkbox" checked={charAllowed} id="characterInput" onChange={() => setCharAllowed((prev) => !prev)} />
                            <label htmlFor="characterInput">Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassKey;