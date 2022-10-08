import React from "react";
import "./App.css";

// const Item = ({name, onRemove, index}) => {
//     return (
//         <li>
//             {name}

//         </li>
//     )
// }

function App() {
    const adjectivesArr = [
        "абсолютный",
        "адский",
        "азартный",
        "активный",
        "ангельский",
        "астрономический",
        "баснословный",
        "безбожный",
        "безбрежный",
        "безвозвратный",
        "безграничный",
        "бездонный",
        "бездушный",
        "безжалостный",
        "замечательно",
        "замечательный",
        "записной",
        "запредельный",
        "заядлый",
        "звериный",
        "зверский",
        "зеленый",
        "злой",
        "злостный",
        "значительный",
        "неоспоримый",
        "неотразимый",
        "неоценимый",
        "непередаваемый",
    ];

    const nounsArr = [
        "лгун",
        "день",
        "конь",
        "олень",
        "человек",
        "программист",
        "ребёнок",
        "конец",
        "город",
        "дурак",
    ];

    const [item, setItem] = React.useState(nounsArr);

    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    }

    const randBtnClick = () => {
        const number = randomNumber();
        setItem(prev => [...prev, number]);
    }

    

    return (
        <div className="App">
            <div className="wrapper">
                <ul>
                    {
                        item.map((n, index) => <li key={index}>{n}</li>)
                    }
                </ul>
                <button onClick={randBtnClick} className="btn btn_generate">
                    Сгенерировать
                </button>
                <button className="btn btn_clear">Очистить</button>
            </div>
        </div>
    );
}

export default App;
