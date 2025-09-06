import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// This will work in react because react will convert this jsx to javascript object
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children : "click me to visit google"
// };

// This will work in react
const anotherElement = <a href="https://www.google.com" target="_blank">Another link</a>

// This will work in react
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'click me to visit google',
  anotherElement // this is child element , we can have multiple child elements , ----evaluated expression , we can not write if condition here
)


createRoot(document.getElementById('root')).render(
  reactElement
)
