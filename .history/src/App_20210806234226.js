import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TypeRacer from "./components/TypeRacer";
import { getQuotes } from "./services/index";
import MouseIcon from "@material-ui/icons/Mouse";
import "./app.css";

export default function App() {
  const [quote, setQuote] = useState();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const { data: quotes } = await getQuotes();
    const index = Math.floor(Math.random() * quotes.length);
    console.log(quotes[index].text);
    setQuote(quotes[index].text);
  };

  return (
    <div className="main">
      <NavBar />
      {!started && (
        <div className="center">
          <button
            onClick={() => setStarted(true)}
            className="btn btn-primary"
            id="button"
          >
            Click To Start
            <MouseIcon />
          </button>
        </div>
      )}
      {started && quote !== undefined && (
        <div className="master">
          <TypeRacer quote={quote} setQuote={setQuote} />
        </div>
      )}
    </div>
  );
}
