// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let ad : string|number|boolean = "123";
ad=true;
const appDiv1: HTMLElement = document.getElementById('app1');
appDiv1.innerHTML = `<h1>${ad}</h1>`;
