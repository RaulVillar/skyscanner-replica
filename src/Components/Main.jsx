import { Button } from "./Button"
import { BiBed, BiWorld } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";

export const Main = () => {
    return (
        <div>
            <div className="main-button-container">
                <Button icon={<BiBed />} info="Hoteles" className="main-hotel-button" />
                <Button icon={<AiFillCar />} info="Alquiler de coches" className="main-renting-button" />
                <Button icon={<BiWorld />} info="Explora el mundo entero" className="main-explore-button" />
            </div>
            <div className="main-add">
                <h1 className="main-add-title">Viajes para disfrutar del sol</h1>
                <p className="main-add-text">Empieza el verano antes con estos destinos de última hora.</p>
                <button className="main-add-text">Cuéntame más</button>
            </div>
        </div>
    )
}
