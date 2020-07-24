//this is how the tutorial I found here
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'
import './assets/css/app.css'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

// Append root div to body
root.id = 'root'
document.body.appendChild(root)

//more info on content-security-policy, which will need to be updated
//https://content-security-policy.com/
let securePolicy = document.createElement("meta");
securePolicy.httpEquiv="Content-Security-Policy";
securePolicy.content="script-src 'self';"
document.head.appendChild(securePolicy);

// Render the app into the root div
render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))