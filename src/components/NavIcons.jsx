const iconStyle = { width: 18, height: 18, display: 'block', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const lockStyle = { width: 14, height: 14, display: 'block', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function IconBack() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M15 18l-6-6 6-6" /></svg>
}
export function IconForward() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M9 18l6-6-6-6" /></svg>
}
export function IconRefresh() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16" /><path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" /></svg>
}
export function IconHome() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></svg>
}
export function IconLock() {
  return <svg viewBox="0 0 24 24" style={lockStyle}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
}
export function IconGo() {
  return <svg viewBox="0 0 24 24" style={{ ...iconStyle, stroke: '#fff' }}><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
}
export function IconBookmarks() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
}
export function IconHistory() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
}
export function IconMute() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
}
export function IconZoomOut() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><line x1="5" y1="12" x2="19" y2="12" /></svg>
}
export function IconZoomIn() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
}
export function IconFullscreen() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" /></svg>
}
export function IconDuplicate() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
}
export function IconPaste() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
}
export function IconTrash() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
}
export function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" style={iconStyle}>
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    </svg>
  )
}
export function IconSettings() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009.19 18l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H13a1.65 1.65 0 001-1.51V7a2 2 0 012-2h.09A1.65 1.65 0 0018 4.61l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
}
export function IconExit() {
  return <svg viewBox="0 0 24 24" style={iconStyle}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
}

export function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" style={iconStyle}>
      <circle cx="11" cy="11" r="6" />
      <line x1="16" y1="16" x2="21" y2="21" />
    </svg>
  )
}
