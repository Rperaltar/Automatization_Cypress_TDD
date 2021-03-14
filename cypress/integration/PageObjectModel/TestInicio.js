import Actions from '../PageObjectPatter/Base/Actions' 
import ModLogin from '../PageObjectPatter/ModelPages/ModLogin'
import ModInicio from '../POMlandingsPyme/ModInicio'
import ModSimulador from '../POMlandingsPyme/ModSimulador'

const inicio = new ModInicio();
const action = new Actions();
const login  = new ModLogin();
const simulador = new ModSimulador();

context("Test Suite Bancoopel/Pyme",()=>{

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
   
    it("Caso de prueba 1",function(){

        inicio.SolicitaTuCredito().click()
        action.Wait();
        simulador.Zonas().click();
        simulador.Close().click();
    
    

    })

  })