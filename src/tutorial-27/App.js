import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="content">
            <div className="block">
                <div className="reviews">
                    <h1>Отзывы:</h1>
                </div>
                <div className="feedback">
                    <input placeholder="Имя" className="name"/>
                    <input placeholder="Почта" className="email"/>
                    <textarea
                        placeholder="Текст..."
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default App;
