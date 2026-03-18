 import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#f4f4f4");
  const [showText, setShowText] = useState(true);
  const [message, setMessage] = useState("");

  const changeColor = () => {
    setBgColor(bgColor === "#f4f4f4" ? "#dff6ff" : "#f4f4f4");
  };

  const showMessage = () => {
    setMessage("Привет! Всё работает правильно.");
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  const cards = [
    { id: 1, title: "Карточка 1", text: "Это первая карточка" },
    { id: 2, title: "Карточка 2", text: "Это вторая карточка" },
    { id: 3, title: "Карточка 3", text: "Это третья карточка" }
  ];

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <header className="header">
        <h1>Мой React сайт</h1>
        <p>Практическая работа</p>
      </header>

      <main className="main">
        <h2>Интерактивные кнопки</h2>

        <button onClick={showMessage}>Показать сообщение</button>
        <button onClick={changeColor}>Сменить фон</button>
        <button onClick={toggleText}>Показать/скрыть текст</button>

        {message && <p>{message}</p>}
        {showText && <p>Этот текст можно скрыть</p>}

        <div className="cards">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 React Practice</p>
      </footer>
    </div>
  );
}

export default App;