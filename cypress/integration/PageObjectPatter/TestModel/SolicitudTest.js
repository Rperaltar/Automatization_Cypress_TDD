import ModComiienzaSolicitud from '../ModelPages/ModComienzaSolicitud'
import ModLogin from '../ModelPages/ModLogin'
import ModSectorGiro from '../ModelPages/ModSectorGiro'
import Input from '../Constants/Input.json'
import Action from '../Base/Actions'
import ModGiros from '../ModelPages/ModGiros'
import ModSectores from '../ModelPages/ModSectores'


const login = new ModLogin();
const comienzaSolicitud = new ModComiienzaSolicitud();
const sectorGiro = new ModSectorGiro();
const action = new Action();
const giro = new ModGiros();
const sector = new ModSectores();


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

       comienzaSolicitud.Nombre(Input.solicitud.NOMBRE);
       comienzaSolicitud.SegundoNombre(Input.solicitud.SEGUNDO_NOMBRE);
       comienzaSolicitud.ApPaterno(Input.solicitud.APELLIDO_PATERNO);
       comienzaSolicitud.ApPaterno(Input.solicitud.APELLIDO_MATERNO);
       comienzaSolicitud.Submit().click()
       comienzaSolicitud.PFAE().click()
       comienzaSolicitud.submit();
       sectorGiro.NombreComercial().type(Input.sector.PRIMARIO);
       sectorGiro.Sector();
       sector.Primario();
       sectorGiro.Giro();
       giro.Servicos();
       assert.isNotNull(comienzaSolicitud.Nombre,action.isNotNull)
       assert.isNotNull(comienzaSolicitud.SegundoNombre,action.isNotNull)
       assert.isNotNull(comienzaSolicitud.ApPaterno,action.isNotNull)
       assert.isNotNull(comienzaSolicitud.ApMaterno,action.isNotNull)
       sectorGiro.SobreNegocio(Input.empresa.detalle)
       action.log("Caso de prueba 1 Exitoso ");
       action.screenshot();

    })
    /*
    it("Caso de prueba 2",function(){

        action.log("Caso de prueba 2 Exitoso");
        */
  })