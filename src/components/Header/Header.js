import React from 'react'
import './Header.css'

import { Button } from 'reactstrap'



const Header = ({ title }) => {

    function seClickeo() {
        alert("se clickeo perri!")
    }

    return (
        <div className='Header'>
            <h1>{title}</h1>
            <br />
            <div>
                <Button className='btn-header' color="danger" onClick={() => seClickeo()} >Peligro</Button>
                <Button className='btn-header' color='warning'>Alerta</Button>
            </div>
        </div>
    )
};

Header.defaultProps = {
    title: 'GitHub Search App',
}

export default Header;

