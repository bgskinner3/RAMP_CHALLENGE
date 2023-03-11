import "./styles.css";
import getData from "./api";
import { useState, useEffect } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [typeWriter, setTypeWriter] = useState([]);

  useEffect(() => {
    getWord();
  }, []);

  useEffect(() => {
    if (!word) return;

    const id = setTimeout(() => {
      setTypeWriter([...typeWriter, word[idx]]);
      setIdx((i) => i + 1);
    }, 500);

    if (idx === word.length) clearTimeout(id);
  }, [word, idx, typeWriter]);

  const getWord = async () => {
    try {
      const word = await getData();
      setWord(word);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return loading ? (
    <div> Loading ... </div>
  ) : (
    <div className="App">
      <div>
        {typeWriter.map((letter) => {
          return letter;
        })}
      </div>
    </div>
  );
}
