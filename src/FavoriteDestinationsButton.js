
import { useNavigate } from "react-router-dom";

export default function FavoriteDestinationsButton() {
  const navigate = useNavigate();

  return (
    <button
      className="App-button favorite-destinations-button"
      onClick={() => navigate("/holiday-blog")}
    >
      See some of my favorite destinations
    </button>
  );
}
