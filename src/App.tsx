import './App.css'
import { links } from './data/links'
import { images } from './data/images'

function App() {
  return (
    <div className="page">
      <header className="profile">
        <img
          className="avatar"
          src={images.avatar}
          alt="Profile"
        />
        <h1>Hibiki</h1>
        <p className="subtitle">AWS好きな3年目エンジニア</p>
      </header>

      <div className="link-list">
        {links.map((link) => (
          <a
            key={link.name}
            className="link-item"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={images.icons[link.name.toLowerCase()]}
              alt={`${link.name} icon`}
              className="link-icon"
            />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
