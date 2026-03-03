import { useRef } from 'react'
import { IconSearch } from './NavIcons'

const QUICK_ITEMS = [
  { name: 'YouTube', url: 'https://youtube.com', letter: 'Y', bg: '#e52d27' },
  { name: 'Gmail', url: 'https://gmail.com', letter: 'G', bg: '#1a73e8' },
  { name: 'GitHub', url: 'https://github.com', letter: 'GH', bg: '#24292e' },
  { name: 'Wikipedia', url: 'https://wikipedia.org', letter: 'W', bg: '#555e6b' },
  { name: 'Reddit', url: 'https://reddit.com', letter: 'R', bg: '#ff4500' },
  { name: 'Twitter', url: 'https://twitter.com', letter: '𝕏', bg: '#1d9bf0' },
  { name: 'HN', url: 'https://news.ycombinator.com', letter: 'HN', bg: '#f6820d' },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com', letter: 'D', bg: '#de5833' },
]

const BOOKMARKS = [
  { title: 'GitHub · Change...', url: 'https://github.com', letter: 'G', iconBg: null },
  { title: 'Jira · Sprint Board', url: 'https://atlassian.com', letter: 'J', iconBg: '#0052cc' },
]

const ACTIVITY = [
  { title: 'GitHub · Change is constant. GitHub keeps you ahead.', url: 'https://github.com', time: '2m ago', icon: '⬡' },
  { title: 'DuckDuckGo Search', url: 'https://duckduckgo.com', time: '18m ago', icon: '🦆' },
  { title: 'YouTube - Music to Code To', url: 'https://youtube.com', time: '1h ago', icon: '▶' },
]

export default function HomePage({ onOpenLink, searchInputRef }) {
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value?.trim()
      if (value) onOpenLink(value)
    }
  }

  return (
    <div className="home-page">
      <div className="logo-area">
        <img className="logo-img" src="/images/logo.png" alt="Safe Browse" />
        <div className="logo-sub">Secure Workspace</div>
      </div>

      <div className="search-wrap">
        <div className="search-box">
          <span className="search-icon">
            <IconSearch />
          </span>
          <input
            ref={searchInputRef}
            className="search-input"
            type="text"
            placeholder="Search privately or enter URL..."
            onKeyDown={handleSearchKeyDown}
          />
          <span className="search-hint">⌘ K</span>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div className="section-label">Quick Access</div>
          <a className="section-action" href="#">
            Customize
          </a>
        </div>
        <div className="quick-grid">
          {QUICK_ITEMS.map((item) => (
            <div
              key={item.url}
              className="quick-item"
              onClick={() => onOpenLink(item.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenLink(item.url)}
            >
              <div className="quick-icon" style={{ background: item.bg }}>
                {item.letter}
              </div>
              <span className="quick-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section bookmarks-section">
        <div className="section-head">
          <div className="section-label">Bookmarks</div>
          <button type="button" className="bookmarks-add-btn">
            Add Bookmark
          </button>
        </div>
        <div className="bookmarks-row">
          {BOOKMARKS.map((item) => (
            <div
              key={item.url}
              className="bookmark-item"
              onClick={() => onOpenLink(item.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenLink(item.url)}
            >
              <div
                className="bk-icon"
                style={item.iconBg ? { background: item.iconBg } : undefined}
              >
                {item.letter}
              </div>
              <div className="bk-info">
                <div className="bk-title">{item.title}</div>
                <div className="bk-url">
                  {item.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}
                </div>
              </div>
            </div>
          ))}
          <div className="bookmark-item bookmark-add" title="Add bookmark">
            <span className="bk-add-icon">+</span>
          </div>
        </div>
      </div>

      {/* <div className="section">
        <div className="section-head">
          <div className="section-label">Recent Activity</div>
          <a className="section-action danger" href="#">
            Clear History
          </a>
        </div>
        <div className="activity-list">
          {ACTIVITY.map((item) => (
            <div
              key={`${item.url}-${item.time}`}
              className="activity-item"
              onClick={() => onOpenLink(item.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenLink(item.url)}
            >
              <div className="act-icon">{item.icon}</div>
              <div className="act-info">
                <div className="act-title">{item.title}</div>
                <div className="act-url">
                  {item.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}
                </div>
              </div>
              <div className="act-time">{item.time}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}
