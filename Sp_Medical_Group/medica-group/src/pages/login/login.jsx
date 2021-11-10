import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assents/css/login.css'

import logo from '../../assents/imagem'


export default function login() {



  return(
    <div> 
       <section className="container-login flex">
        <div className="img-login">
          <div className="img-overlay"></div>
        </div>
  
        <div className="item-login">
          <div className="retangulo1"></div>
          <div className="row">
            <div className="item">
              <img src="imagem/logo_spmedgroup_v2 1.png" className="icone-login" alt="logo do Sp Medical Group" />
            </div>
            <form>
              <div className="item">
                <input className="input-login" placeholder="E-mail" type="text" name="username" id="login-email" />
              </div>
              <div className="item">
                <input className="input-login" placeholder="Senha" type="password" name="password" id="login-password" />
              </div>
              <div className="item">
                <button className="btn btn-login" id="btn-login"> Login </button>
              </div>
            </form>
          </div>
  
          <div className="retangulo2"></div>
        </div>
      </section>   
    </div>
  )


};

