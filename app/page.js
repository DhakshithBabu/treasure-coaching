export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      fontFamily: "sans-serif",
      padding: "40px",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "4rem",
        color: "red"
      }}>
        Treasure Coaching
      </h1>

      <p style={{
        fontSize: "1.4rem",
        color: "#aaa"
      }}>
        Trying My Best To Make You Better
      </p>

      <div style={{
        marginTop: "40px",
        padding: "30px",
        border: "1px solid red",
        borderRadius: "20px",
        maxWidth: "600px",
        marginInline: "auto"
      }}>
        <h2>Minecraft PvP Coaching</h2>

        <p>NethPot • CPVP • Tank/Beast</p>

        <p>30 Minute 1-on-1 Sessions</p>

        <button style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "12px",
          fontSize: "1rem",
          cursor: "pointer"
        }}>
          Book Session - ₹29
        </button>
      </div>
    </main>
  )
}
