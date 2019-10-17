// == Import : npm
import React, { Component } from 'react';
import { render } from 'react-dom';


// == Import : local
// import App from 'src/components/App';
// import LoginForm from './LoginForm'
import './modal.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
class Modal extends Component {
  state = { showLogin: false, showRegister: false };

  showModalLogin = () => {
    this.setState({ showLogin: true });
  };

  hideModalLogin = () => {
    this.setState({ showLogin: false });
  };

  showModalRegister = () => {
    this.setState({ showRegister: true });
  };

  hideModalRegister = () => {
    this.setState({ showRegister: false });
  };

  render() {
    return (
      <>
        <div>
          <LoginForm show={this.state.showLogin} handleClose={this.hideModalLogin}>
          </LoginForm>
          <button type="button" className="navigation-item--right button" onClick={this.showModalLogin}>
            Connexion
          </button>
        </div>
        <div>
          <RegisterForm show={this.state.showRegister} handleClose={this.hideModalRegister}>
          </RegisterForm>
          <button type="button" className="navigation-item--right button" onClick={this.showModalRegister}>
            Inscription
          </button>
        </div>
      </>
    );
  }
}

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(<Modal />, target);

export default Modal;
