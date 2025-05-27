import './App.css'

const links = [
  {
    name: 'X',
    href: 'https://x.com/gravitas580',
    icon: '/icons/x.svg',
  },
  {
    name: 'Qiita',
    href: 'https://qiita.com/Gravitas',
    icon: '/icons/qiita.svg',
  },
  {
    name: 'SpeakerDeck',
    href: 'https://speakerdeck.com/hibikisuaga',
    icon: '/icons/speakerdeck.svg',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/gravitas580',
    icon: '/icons/github.svg',
  },
  {
    name: 'LinkedIn',
    href: '#', // 後でURL追加してね
    icon: '/icons/linkedin.svg',
  },
]

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
