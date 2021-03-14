const { before, after, beforeEach, afterEach } = require("mocha");

import LoginPage from  '../ModelPages/LoginPage'
import Actions   from  '../Base/Actions'
import Input     from  '../Constants/Input.json'

const login = new LoginPage();
const action = new Actions();

context("Test Suite Hooks",()=>{

    before(()=>{
       action.log("Ejecutando precondiciones de pruebas");
    })
    after(()=>{
       action.log("Suite de pruebas Ejecutada")
    })
    beforeEach(()=>{
       login.visit();
       action.log("Visitando Pagina:");
    })
   
    test("Caso de prueba 1",function(){

        action.log("Caso de prueba 1 Exitoso ");
    })
    test("Caso de prueba 2",function(){

        action.log("Caso de prueba 2 Exitoso");
  })
})