import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div>
          <p>01234567890</p>
          <p>Abcdefg</p>
          <p>あいうえお</p>
          <p>アイウエオ</p>
          <p>月火水木金土日</p>
        </div>
        <div>
          <pre>
            <code>{`
font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`}
            </code>
          </pre>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href='https://devhints.io/css-system-font-stack'>CSS system fonts cheatsheet</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
