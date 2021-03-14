const { before, after, beforeEach, afterEach } = require('cypress-xpath');

class ModComienzaSolicitud{

    Nombre(nombre){

        const sendkeys = cy.get('#name')
        sendkeys.clear()
        sendkeys.type(nombre)

        return this
    }
    SegundoNombre(segundoNombre){

        const sendkeys = cy.get('#secondName')
        sendkeys.clear()
        sendkeys.type(segundoNombre)

        return this
    }
    ApPaterno(apPaterno){

        const sendkeys = cy.get('#lastname')
        sendkeys.clear()
        sendkeys.type(apPaterno)

        return this
    }
    ApMaterno(apMaterno){

        const sendkeys = cy.get('#secondLastname')
        sendkeys.clear()
        sendkeys.type(apMaterno)

        return this
    }
    Submit(){

        return cy.xpath('/html/body/div[1]/div[3]/div/div/form/div[3]/button')

        /*
        const submit = cy.xpath('/html/body/div[1]/div[3]/div/div/form/div[3]/button')
        submit.click();
        */
        
    }   
    PFAE(){

        return cy.xpath('/html/body/div[1]/div[3]/div/div/form/div[1]/div[1]/button')
        /*
        const pfae = cy.xpath('/html/body/div[1]/div[3]/div/div/form/div[1]/div[1]/button')
        pfae.click();
        */

    }
    PMORAL(){

        const pmoral = cy.xpath('')
        pmoral.click();

    }
    submit(){

        const slide2 = cy.get('.cicle-button-blue')
        slide2.click();

    }
    
}

    export default ModComienzaSolicitud