import React from 'react';

function Navegation({titulo, data, logo}) {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/" className="text-white">
                    {titulo}
                    <span className="badge badge-pill badge-light ml-3">
                        {data.length}
                    </span>
                </a>
                <img src={logo}  className="App-logo" alt="logo" />
            </nav>  
        </div>
    );
}

export default Navegation;