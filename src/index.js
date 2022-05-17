import React from 'react';
import ReactDOM from 'react-dom/client';

const org = { name: 'ezee', fix: 'technosys' };

function HomePage() {
    const [likes, setLikes] = React.useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    )
}


function formatName(props) { return props.name + ' ' + props.fix }
function nameFormat({ name, fix }) { return name + ' ' + fix }

function getGreeting(org) {
    if (org) {
        return (<div><h1>Hello, {formatName(org)} {nameFormat(org)}</h1> <HomePage /></div>)
    }
    return <h1>Hello, Stranger</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(getGreeting(org));

// https://reactjs.org/docs/components-and-props.html