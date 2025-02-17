import React, { useState } from 'react';

export default function About(props) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleStyle = () => {
        setDarkMode(!darkMode);
    };

    const myStyle = {
        color: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? 'black' : 'white',
        border: `1px solid ${darkMode ? 'white' : 'black'}`,
    };

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-2">About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary my-3" onClick={toggleStyle}>
                Toggle Dark Mode
            </button>
        </div>
    );
}