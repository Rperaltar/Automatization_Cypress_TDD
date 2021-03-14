import ModSectorGiro from "./ModSectorGiro";

class ModSectores{

    Primario(){

        const primario = cy.get('#__next > div.container > div > form > div:nth-child(4) > div.col-lg-8.col-md-8.col-sm-12.col-xs-12.pr-lg-2.pr-md-2 > div > ul > li:nth-child(1) > button')
        primario.click();
    
    }
    Secundario(){

        const secundario = cy.get('')
        secundario.click();
    
    }
    Terciario(){

        const terciario = cy.get('')
        terciario.click();
    
    }
}

export default ModSectores