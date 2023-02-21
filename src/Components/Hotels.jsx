import React from 'react'

function Hotels() {
    return (
        <div className='hotelsPage'>
            <div className="hotelsPage-content">
                <p className='hotelsPage-p'>Encuentra tu hotel ideal.</p>
                <div className="hotelsPage-content-form">
                    <input type="text" placeholder="Introduce tu destino" />
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    )
}

export default Hotels