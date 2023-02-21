import React from 'react'

import { AiOutlineArrowRight } from "react-icons/ai";


function Hotels() {

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });
    return (
        <div className='hotelsPage'>
            <div className="hotelsPage-content">
                <p className='hotelsPage-p'>Encuentra tu hotel ideal.</p>
                <div className="hotelsPage-content-form">
                    <div>
                        <p>¿Dónde quieres alojarte?</p>
                        <input type="text" placeholder="Introduce tu destino" />
                    </div>
                    <div>
                        <p>Entrada</p>
                        <input type="date"  />
                    </div>
                    <button>Buscar hoteles <AiOutlineArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Hotels