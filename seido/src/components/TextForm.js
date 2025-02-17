import React, { useState } from 'react';

export default function TextForm(props) {
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase successfully.", "Success");
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase successfully.", "Success");
    };

    const handleClearClick = () => {
        setText("");
        props.showAlert("Input fields have been cleared.", "Success");
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Modified text copied to clipboard.", "Success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed for better readability.", "Success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleFindReplace = () => {
        let newText = text.replace(new RegExp(findWord, "gi"), replaceWord);
        setText(newText);
    };

    const [text, setText] = useState('');
    const [findWord, setFindWord] = useState('');
    const [replaceWord, setReplaceWord] = useState('');

    return (
        <>
            <div className="container d-flex flex-column align-items-center mt-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 className="text-center">{props.heading}</h1>
                <div className="mb-3 w-75">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor: props.mode === 'dark' ? '#181818' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>

                {/* Buttons Container which will be side by side else could be done in different way too*/}
                <div className="d-flex gap-2">
                    <button className="btn btn-primary" onClick={handleUpClick}>
                        Uppercase
                    </button>

                    <button className="btn btn-primary" onClick={handleLoClick}>
                        Lowercase
                    </button>

                    <button className="btn btn-primary" onClick={handleCopy}>
                       Copy Text
                   </button>

                   <button className="btn btn-primary" onClick={handleExtraSpaces}>
                       Remove Extra Spaces
                   </button>

                    <button className="btn btn-danger" onClick={handleClearClick}>
                        Clear
                    </button>
                </div>

                {/* Find and Replace bro*/}
                <div className="mt-4 w-75">
                    <h3>Find & Replace</h3>
                    <div className="d-flex gap-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Find..."
                            value={findWord}
                            onChange={(e) => setFindWord(e.target.value)}
                            style={{backgroundColor: props.mode === 'dark' ? '#181818' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Replace with..."
                            value={replaceWord}
                            onChange={(e) => setReplaceWord(e.target.value)}
                            style={{backgroundColor: props.mode === 'dark' ? '#181818' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
                        />
                        <button className="btn btn-success" onClick={handleFindReplace}>
                            Replace
                        </button>
                    </div>
                </div>
            </div>

            <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").filter(word => word !== "").length)} Minute is required to finish reading.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter the data above to preview it.!!!"}</p>
            </div>
        </>
    );
}