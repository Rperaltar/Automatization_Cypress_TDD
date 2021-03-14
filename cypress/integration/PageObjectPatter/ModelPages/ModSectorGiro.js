class ModSectorGiro{


NombreComercial(){

    return cy.xpath('//*[@id="businessName"]');
    /*
    const nombreComercial = cy.xpath('//*[@id="businessName"]')
    nombreComercial.clear()
    nombreComercial.type(value)
    */

     

}
Sector(){

    const sector = cy.get('#__next > div.container > div > form > div:nth-child(4) > div.col-lg-8.col-md-8.col-sm-12.col-xs-12.pr-lg-2.pr-md-2 > div > button')
    sector.click();

}

Giro(){

    const giro = cy.xpath('//*[@id="__next"]/div[3]/div/form/div[3]/div[2]/div/button')
    giro.click();

}
Servicios(){

    const servicios = cy.get('#__next > div.container > div > form > div:nth-child(5) > div.col-lg-8.col-md-8.col-sm-12.col-xs-12.pr-lg-2.pr-md-2 > div > ul > li:nth-child(4) > button')
    servicios.click();

}
SobreNegocio(value){

    const sobreNegocio = cy.get('#businessAbout')
    sobreNegocio.clear()
    sobreNegocio.type(value)

    return this

}
Submit(){

    const submit = cy.xpath('//*[@id="__next"]/div[3]/div/form/div[5]/button')
    submit.click();

  }
}

export default ModSectorGiro