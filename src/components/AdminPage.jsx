import { useFetchEpisodes } from "../store/useFetchApi";
import { useLoginStore } from "../store/useLogin";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminPage.css";
function AdminPage() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const episodes = useFetchEpisodes((state) => state.episodes);
  const { getEpisodes } = useFetchEpisodes();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
  }

  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);

  return (
    <div>
      <Link to="/info">
        <button className="btn-back">Back</button>
      </Link>
      {episodes.map((episode) => (
        <div key={episode.id} className="card">
          <h1>{episode.name}</h1>
          <p>{episode.episode}</p>
          <p>{episode.air_date}</p>
          <p>{episode.url}</p>
          <p>{episode.created}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;
