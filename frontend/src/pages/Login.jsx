import { useNavigate } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()

    // depois aqui vai a validação com backend
    navigate("/dashboard")
  }

  return (
    <div style={{
      height: "100vh",
      background: "#0f0f0f",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#e5e5e5"
    }}>

      <form
        onSubmit={handleLogin}
        style={{
          background: "#1a1a1a",
          padding: "40px",
          borderRadius: "10px",
          width: "320px",
          boxShadow: "0 0 20px #00aaff55",
          border: "1px solid #00aaff33"
        }}
      >

        <h2 style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#00aaff"
        }}>
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            background: "#0f0f0f",
            border: "1px solid #333",
            color: "#fff",
            borderRadius: "5px"
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            background: "#0f0f0f",
            border: "1px solid #333",
            color: "#fff",
            borderRadius: "5px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#00aaff",
            border: "none",
            borderRadius: "5px",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Entrar
        </button>

      </form>
    </div>
  )
}