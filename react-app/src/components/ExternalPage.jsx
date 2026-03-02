export default function ExternalPage({ currentUrl, onGoHome }) {
  return (
    <div className="ext-page">
      <div className="ext-topbar">
        <button type="button" className="ext-back-btn" onClick={onGoHome}>
          🏠 &nbsp;Home
        </button>
        <div className="ext-url-display">{currentUrl}</div>
        <div className="ext-secure-tag">
          <span style={{ fontSize: '0.7rem' }}>🔒</span> Encrypted
        </div>
      </div>
      <div className="ext-content">
        <div className="ext-content-icon">🌐</div>
        <div style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>
          External page would load here inside the encrypted tunnel
        </div>
        <div
          style={{
            color: 'var(--text-dim)',
            fontSize: '0.65rem',
            marginTop: '0.25rem',
          }}
        >
          {currentUrl}
        </div>
        <button
          type="button"
          onClick={onGoHome}
          style={{
            marginTop: '1.5rem',
            background: 'var(--accent-dim)',
            border: '1px solid rgba(0,212,170,0.25)',
            color: 'var(--accent)',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.75rem',
            fontFamily: "'DM Mono', monospace",
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          ← Return to Safe Browse Home
        </button>
      </div>
    </div>
  )
}
