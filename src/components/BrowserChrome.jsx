import { useRef, useState, useEffect } from 'react'
import {
  IconBack,
  IconForward,
  IconRefresh,
  IconLock,
  IconGo,
  IconMenu,
  IconBookmarks,
  IconMute,
  IconZoomOut,
  IconZoomIn,
  IconFullscreen,
  IconDuplicate,
  IconPaste,
  IconSettings,
  IconExit,
} from './NavIcons'

const SEARCH_ENGINES = [
  { id: 'google', label: 'Google', searchUrl: 'https://www.google.com/search?q=' },
  { id: 'duckduckgo', label: 'DuckDuckGo', searchUrl: 'https://duckduckgo.com/?q=' },
  { id: 'brave', label: 'Brave', searchUrl: 'https://search.brave.com/search?q=' },
  { id: 'bing', label: 'Bing', searchUrl: 'https://www.bing.com/search?q=' },
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
  const [mainMenuOpen, setMainMenuOpen] = useState(false)
  const [isIsolatedSession, setIsIsolatedSession] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-engine-wrapper')) setEngineMenuOpen(false)
      if (!event.target.closest('.nav-menu-wrapper')) setMainMenuOpen(false)
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

  const sessionLabel = isIsolatedSession ? 'Isolated' : 'Trusted'
  const sessionBadgeClass = isIsolatedSession
    ? 'session-badge session-badge--isolated'
    : 'session-badge session-badge--trusted'

  return (
    <div className="browser-chrome">
      <div className="nav-left">
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
          onClick={() => onRefresh?.()}
          title="Refresh"
        >
          <IconRefresh />
        </button>
      </div>

      <div className="nav-center">
        <div className="nav-center-inner">
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
                onClick={() => setEngineMenuOpen((o) => !o)}
              >
                {SEARCH_ENGINES.find((e) => e.id === activeEngineId)?.label ?? 'Google'}
              </button>
              {engineMenuOpen && (
                <div className="search-engine-menu">
                  {SEARCH_ENGINES.map((engine) => (
                    <button
                      key={engine.id}
                      type="button"
                      className={`search-engine-option ${engine.id === activeEngineId ? 'active' : ''}`}
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
          <button type="button" className="bookmark-btn" title="Bookmark this page">
            <IconBookmarks />
          </button>
        </div>
      </div>

      <div className="nav-right">
        <span className={sessionBadgeClass}>
          <span className={`session-badge-dot ${isIsolatedSession ? 'session-badge-dot--isolated' : 'session-badge-dot--trusted'}`} aria-hidden />
          {sessionLabel}
        </span>
        <div className="nav-menu-wrapper">
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMainMenuOpen((o) => !o)}
            title="Menu"
            aria-expanded={mainMenuOpen}
          >
            <IconMenu />
          </button>
          {mainMenuOpen && (
            <div className="nav-menu-dropdown">
              <div className="nav-menu-section">
                <div className="nav-menu-section-label">Session</div>
                <button type="button" className="nav-menu-item" onClick={() => { setIsIsolatedSession(false); setMainMenuOpen(false) }}>
                  New Trusted Workspace
                </button>
                <button type="button" className="nav-menu-item" onClick={() => { setIsIsolatedSession(true); setMainMenuOpen(false) }}>
                  New Isolated Session
                </button>
              </div>
              <div className="nav-menu-sep" />
              <div className="nav-menu-section">
                <div className="nav-menu-section-label">Page Controls</div>
                <button type="button" className="nav-menu-item">
                  <IconBookmarks />
                  <span>Bookmark this page</span>
                </button>
                <button type="button" className="nav-menu-item" onClick={() => setMuted((m) => !m)}>
                  <IconMute />
                  <span>Mute tab</span>
                </button>
              </div>
              <div className="nav-menu-sep" />
              <div className="nav-menu-section">
                <div className="nav-menu-section-label">View Controls</div>
                <div className="nav-menu-zoom">
                  <button type="button" className="nav-menu-zoom-btn" onClick={() => setZoom((z) => Math.max(50, z - 10))} title="Zoom out">
                    <IconZoomOut />
                  </button>
                  <span className="nav-menu-zoom-value">{zoom}%</span>
                  <button type="button" className="nav-menu-zoom-btn" onClick={() => setZoom((z) => Math.min(150, z + 10))} title="Zoom in">
                    <IconZoomIn />
                  </button>
                </div>
                <button type="button" className="nav-menu-item">
                  <IconFullscreen />
                  <span>Fullscreen</span>
                </button>
              </div>
              <div className="nav-menu-sep" />
              <div className="nav-menu-section">
                <div className="nav-menu-section-label">Edit</div>
                <button type="button" className="nav-menu-item">
                  <IconDuplicate />
                  <span>Copy</span>
                </button>
                <button type="button" className="nav-menu-item" disabled={isIsolatedSession} title={isIsolatedSession ? 'Clipboard restricted to browser' : undefined}>
                  <IconPaste />
                  <span>Paste</span>
                </button>
              </div>
              <div className="nav-menu-sep" />
              <div className="nav-menu-section">
                <div className="nav-menu-section-label">System</div>
                <button type="button" className="nav-menu-item">
                  <IconSettings />
                  <span>Settings</span>
                </button>
                <button type="button" className="nav-menu-item">
                  <IconExit />
                  <span>Exit</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
