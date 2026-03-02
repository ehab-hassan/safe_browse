export default function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-left">
        <div className="status-item">
          <div className="s-dot green" />
          CONNECTION SECURE
        </div>
        <div className="status-item">
          <div className="s-dot blue" />
          V2.4.0-STABLE
        </div>
      </div>
      <div className="status-right">
        <div className="tunnel-bar">
          <div className="s-dot teal" />
          TUNNEL ACTIVE
          <div className="tunnel-track">
            <div className="tunnel-fill" />
          </div>
          420 KB/S
        </div>
        <div className="status-item">
          <div className="s-dot blue" />
          SECURE NODE: US-EAST-PRIMARY
        </div>
      </div>
    </div>
  )
}
