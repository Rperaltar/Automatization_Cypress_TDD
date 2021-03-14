class ModGiros{

    Servicos(){

        const servicios = cy.get('#__next > div.container > div > form > div:nth-child(5) > div.col-lg-8.col-md-8.col-sm-12.col-xs-12.pr-lg-2.pr-md-2 > div > ul > li:nth-child(4) > button')
        servicios.click();
    
    }
}

export default ModGiros