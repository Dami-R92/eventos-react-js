import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

//Reactstrap
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

//COMPONENTES
import Header from './components/Header/Header.js';
import CardUser from './components/CardUser/CardUser';


const App = () => {
  const [inputText, setUpInputText] = useState('');

  const [userData, setUserData] = useState({});

  const onHandleChange = (e) => {
    // console.log(e.target.value);
    setUpInputText(e.target.value);
  };

  const onHandleSubmit = (e) => {
    //Para prevenir el efect por default de un form cuando se hace un submit.
    //DEBEMOS UTILIZAR UN PREVENTDEFAULT.
    e.preventDefault();
    const userInput = inputText.toLocaleLowerCase().replace(/ /g, '')//Sanitizar la variable de espacios y mayusculas.
    // console.log(userInput);
    if (userInput) {
      axios(`https://api.github.com/users/${userInput}`).then((res) =>
        // console.log(res.data)
        setUserData(res.data)
      );
    };
    //Limpiamos el input despues de la busqueda.
    setUpInputText('');
  };

  return (
    <div className="App">
      <Header />
      <br />
      <div className="App-form">
        <form onSubmit={onHandleSubmit} >
          <InputGroup  >
            <Input placeholder='Buscar Usuario' onChange={onHandleChange} value={inputText} />
            <InputGroupAddon addonType='prepend'>
              <Button color='primary' >Buscar</Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
        {/* <Button className='btn-explote' color='success'>Make it Boom!</Button> */}
      </div>

      {/* {userData.id ? (<div className="App-Container-Data">
        <CardUser userData={userData} />
      </div>) : null } */}

      {/* Otra forma mas elegante */}
      {userData.id && (<div className="App-Container-Data">
        <CardUser userData={userData} />
      </div>)}

    </div>
  );
}

export default App;
