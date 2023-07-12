import { useFetchApi } from "../store/useFetchApi";
import { useLoginStore } from "../store/useLogin";
import { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./Character.css";
function Characters() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const characters = useFetchApi((state) => state.characters);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const logout = useLoginStore((state) => state.logout);
  const { getCharacters } = useFetchApi();

  const navigate = useNavigate();

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <div className={`container ${theme}`}>
      <button onClick={toggleTheme} className="btn">
        Toggle Theme
      </button>
      {isLoggedIn && (
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <button className="btn">Admin</button>
        </Link>
      )}
      {isLoggedIn ? (
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      ) : (
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="btn">Login</button>
        </Link>
      )}
      {characters.map((character) => (
        <div key={character.id} className="card">
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
          <p>{character.species}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;
