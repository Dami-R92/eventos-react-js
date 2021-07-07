import React , {useState} from 'react';
import './App.css';
import axios from 'axios';
//Reactstrap
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

//COMPONENTES
import Header from './components/Header/Header.js';


const App = () => {
  const [inputText, setUpInputText] = useState('');

  const onHandleChange = (e)=> {
    // console.log(e.target.value);
    setUpInputText(e.target.value);
    console.log('Inputtext', inputText);
  };

  const onHandleSubmit = (e)=> {
    //Para prevenir el efect por defaul de un form cuando se hace un submit.
    //DEBEMOS UTILIZAR UN PREVENTDEFAULT.
    e.preventDefault();
    console.log('Hiciste Submit!');
    // axios(`https://api.github.com/users/${inputText}`)
  };



  return (
    <div className="App">
      <Header />
      <br />
      <div className="App-form">
        <form onSubmit={onHandleSubmit} >
          <InputGroup  >
            <Input placeholder='Buscar Usuario' onChange={onHandleChange} />
            <InputGroupAddon addonType='prepend'>
              <Button color='primary' >Buscar</Button>
            </InputGroupAddon>
          </InputGroup>

        </form>
      </div>
    </div>
  );
}

export default App;
