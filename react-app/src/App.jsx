import { useState, useRef, useEffect } from 'react'
import BrowserChrome from './components/BrowserChrome'
import ChromeBelowBar from './components/ChromeBelowBar'
import HomePage from './components/HomePage'
import ExternalPage from './components/ExternalPage'
import StatusBar from './components/StatusBar'

function normalizeUrl(url) {
  if (!url || typeof url !== 'string') return ''
  const trimmed = url.trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return 'https://' + trimmed
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentUrl, setCurrentUrl] = useState('')
  const searchInputRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const openLink = (url) => {
    const normalized = normalizeUrl(url)
    if (!normalized) return
    setCurrentUrl(normalized)
    setCurrentPage('external')
  }

  const goHome = () => {
    setCurrentPage('home')
    setCurrentUrl('')
  }

  const isExternal = currentPage === 'external'

  return (
    <>
      <div className="bg-blur-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-orb bg-orb-4" />
        <div className="bg-orb bg-orb-5" />
      </div>
      <BrowserChrome
        isExternal={isExternal}
        url={currentUrl}
        onUrlChange={setCurrentUrl}
        onOpenLink={openLink}
        onGoHome={goHome}
      />
      <ChromeBelowBar />
      <div className={`page ${currentPage === 'home' ? 'active' : ''}`}>
        <HomePage onOpenLink={openLink} searchInputRef={searchInputRef} />
      </div>
      <div className={`page ${currentPage === 'external' ? 'active' : ''}`}>
        <ExternalPage currentUrl={currentUrl} onGoHome={goHome} />
      </div>
      <StatusBar />
    </>
  )
}
