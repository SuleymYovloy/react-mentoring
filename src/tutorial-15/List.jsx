import React from "react";
import './style.css'


function App() {

    const [visibleLabelOne, setVisibleLabelOne] = React.useState(true);
    const [visibleLabelTwo, setVisibleLabelTwo] = React.useState(true);
    const [visibleLabelThree, setVisibleLabelThree] = React.useState(true);
    const [visibleLabelfour, setVisibleLabelfour] = React.useState(true);
    const toggleVisibleLabeOne = () => {
        setVisibleLabelOne((visible) => !visible);
    };
    const toggleVisibleLabeTwo = () => {
        setVisibleLabelTwo((visible) => !visible);
    };
    const toggleVisibleLabeThree = () => {
        setVisibleLabelThree((visible) => !visible);
    };
    const toggleVisibleLabeFour = () => {
        setVisibleLabelfour((visible) => !visible);
    };

    return (
        <div>
            <div  className='appContainer'>
                <h1 className="appTitle">FAQ</h1>
                <div className="appTabs">
                    <div className={visibleLabelOne && "tab active"} >
                        <input id="tab-one" type="checkbox" name="tabs" />
                        <label onClick={toggleVisibleLabeOne} for="tab-one">Сколько всего мест в доме?</label>
                        <div className="tabContent">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Non quos nemo corporis velit
                                culpa veritatis asperiores deserunt, commodi
                                ipsum at? Esse quibusdam dignissimos recusandae
                                enim. Eaque expedita eum provident totam!
                            </p>
                        </div>
                    </div>
                    <div className={visibleLabelTwo && "tab active"}>
                        <input id="tab-two" type="checkbox" name="tabs" />
                        <label onClick={toggleVisibleLabeTwo} for="tab-two">Самая дорогая квартира?</label>
                        <div className="tabContent">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime fuga deserunt aliquid
                                voluptatum ad, molestiae dicta officiis animi
                                eum mollitia, reiciendis a cum ratione veritatis
                                cupiditate voluptatem. Consectetur,
                                exercitationem magnam.
                            </p>
                        </div>
                    </div>
                    <div className={visibleLabelThree && "tab active"}>
                        <input id="tab-three" type="checkbox" name="tabs" />
                        <label onClick={toggleVisibleLabeThree} for="tab-three">
                            {" "}
                            Могу ли я отменить бронирование?
                        </label>
                        <div className="tabContent">
                            <p>
                                Да, вы можете отменить забронированную квартиру
                                в течение 3 дней.
                            </p>
                        </div>
                    </div>
                    <div className={visibleLabelfour && "tab active"}>
                        <input id="tab-four" type="checkbox" name="tabs" />
                        <label onClick={toggleVisibleLabeFour}  for="tab-four"> Можно ли купить квартиру?</label>
                        <div className="tabContent">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Est commodi itaque ratione
                                voluptatem dolores iusto aperiam adipisci
                                incidunt perspiciatis ullam! Repellat accusamus
                                rerum excepturi minus delectus? Consequatur
                                libero nemo alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
