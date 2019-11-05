import React from 'react';

function Navegation(props) {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="www.google.com" className="text-white">
                    {props.titulo}
                    <span className="badge badge-pill badge-light ml-2">
                        {props.Bum.length}
                    </span>
                </a>
                <img src={props.logo}  className="App-logo" alt="logo" />
            </nav>  
        </div>
    );
}

export default Navegation;