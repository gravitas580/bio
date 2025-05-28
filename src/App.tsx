import './App.css'
import { links } from './data/links'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Hibiki</h1>
        <p className="subtitle">AWS好きなインフラエンジニア 🚀</p>
      </header>

      <div className="link-grid">
        {links.map((link) => (
          <a
            key={link.name}
            className="link-card"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.icon} alt={`${link.name} icon`} />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
