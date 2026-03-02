import { useRef } from 'react'
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

export default function BrowserChrome({
  isExternal,
  url,
  onUrlChange,
  onOpenLink,
  onGoHome,
  onRefresh,
}) {
  const urlInputRef = useRef(null)

  const handleGo = () => {
    const value = urlInputRef.current?.value?.trim()
    if (value) onOpenLink(value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value?.trim()
      if (value) onOpenLink(value)
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
      </div>
      <button type="button" className="search-engine-btn" title="Search engine">
        Google
      </button>
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
