import { useRef, useState, useEffect } from 'react'
import {
  IconBack,
  IconForward,
  IconRefresh,
  IconHome,
  IconLock,
  IconGo,
  IconBookmarks,
  IconHistory,
  IconMute,
  IconZoomOut,
  IconZoomIn,
  IconFullscreen,
  IconDuplicate,
  IconTrash,
} from './NavIcons'

const SEARCH_ENGINES = [
  { id: 'google', label: 'Google', searchUrl: 'https://www.google.com/search?q=' },
  { id: 'bing', label: 'Bing', searchUrl: 'https://www.bing.com/search?q=' },
  { id: 'brave', label: 'Brave', searchUrl: 'https://search.brave.com/search?q=' },
  { id: 'duckduckgo', label: 'DuckDuckGo', searchUrl: 'https://duckduckgo.com/?q=' },
]

export default function BrowserChrome({
  isExternal,
  url,
  onUrlChange,
  onOpenLink,
  onGoHome,
  onRefresh,
}) {
  const urlInputRef = useRef(null)
  const [activeEngineId, setActiveEngineId] = useState('google')
  const [engineMenuOpen, setEngineMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-engine-wrapper')) {
        setEngineMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const resolveDestination = (value) => {
    const trimmed = value.trim()
    if (!trimmed) return ''

    const hasSpace = /\s/.test(trimmed)
    const looksLikeUrl =
      /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed) || (trimmed.includes('.') && !hasSpace)

    if (looksLikeUrl) return trimmed

    const engine = SEARCH_ENGINES.find((e) => e.id === activeEngineId) ?? SEARCH_ENGINES[0]
    return engine.searchUrl + encodeURIComponent(trimmed)
  }

  const handleGo = () => {
    const value = urlInputRef.current?.value?.trim()
    if (!value) return
    const destination = resolveDestination(value)
    if (destination) onOpenLink(destination)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value?.trim()
      if (!value) return
      const destination = resolveDestination(value)
      if (destination) onOpenLink(destination)
    }
  }

  const handleRefresh = (e) => {
    e.target.style.transform = 'rotate(360deg)'
    e.target.style.transition = 'transform 0.4s ease'
    setTimeout(() => {
      e.target.style.transform = ''
      e.target.style.transition = ''
    }, 400)
    onRefresh?.()
  }

  return (
    <div className="browser-chrome">
      <div className="nav-btns">
        <button
          type="button"
          className={`nav-btn ${isExternal ? 'active' : ''}`}
          onClick={onGoHome}
          title="Back"
        >
          <IconBack />
        </button>
        <button type="button" className="nav-btn" title="Forward">
          <IconForward />
        </button>
        <button
          type="button"
          className="nav-btn"
          onClick={handleRefresh}
          title="Refresh"
        >
          <IconRefresh />
        </button>
      </div>
      <button
        type="button"
        className="home-btn"
        onClick={onGoHome}
        style={{ display: isExternal ? 'flex' : 'none' }}
        title="Go Home"
      >
        <IconHome />
        <span className="tooltip">Go Home</span>
      </button>
      <div className="url-bar">
        <span className="url-lock"><IconLock /></span>
        <input
          ref={urlInputRef}
          className="url-input"
          type="text"
          placeholder="about:blank"
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="search-engine-wrapper">
          <button
            type="button"
            className="search-engine-btn"
            title="Search engine"
            onClick={() => setEngineMenuOpen((open) => !open)}
          >
            {SEARCH_ENGINES.find((e) => e.id === activeEngineId)?.label ?? 'Google'}
          </button>
          {engineMenuOpen && (
            <div className="search-engine-menu">
              {SEARCH_ENGINES.map((engine) => (
                <button
                  key={engine.id}
                  type="button"
                  className={`search-engine-option ${
                    engine.id === activeEngineId ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveEngineId(engine.id)
                    setEngineMenuOpen(false)
                    urlInputRef.current?.focus()
                  }}
                >
                  {engine.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <button type="button" className="go-btn" title="Go" onClick={handleGo}>
        <IconGo />
      </button>
      <div className="chrome-utils">
        <button type="button" className="chrome-util-btn" title="Bookmarks">
          <IconBookmarks />
        </button>
        <button type="button" className="chrome-util-btn" title="History">
          <IconHistory />
        </button>
        <button type="button" className="chrome-util-btn" title="Mute">
          <IconMute />
        </button>
        <div className="chrome-sep" />
        <div className="chrome-zoom">
          <button type="button" className="chrome-util-btn" title="Zoom out">
            <IconZoomOut />
          </button>
          <span className="zoom-value">100%</span>
          <button type="button" className="chrome-util-btn" title="Zoom in">
            <IconZoomIn />
          </button>
        </div>
        <button type="button" className="chrome-util-btn" title="Full screen">
          <IconFullscreen />
        </button>
        <button type="button" className="chrome-util-btn" title="Copy from Browser">
          <IconDuplicate />
        </button>
        <button type="button" className="chrome-util-btn" title="Paste to Browser">
          <IconTrash />
        </button>
      </div>
    </div>
  )
}
