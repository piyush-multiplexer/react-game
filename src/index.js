import ReactDOM from 'react-dom/client';

const org = { name: 'ezee', fix: 'technosys' };

function formatName(props) { return props.name + ' ' + props.fix }
function nameFormat({ name, fix }) { return name + ' ' + fix }

function getGreeting(org) {
    if (org) {
        return <h1>Hello, {formatName(org)} {nameFormat(org)}</h1>;
    }
    return <h1>Hello, Stranger</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(getGreeting(org));

// https://reactjs.org/docs/components-and-props.html