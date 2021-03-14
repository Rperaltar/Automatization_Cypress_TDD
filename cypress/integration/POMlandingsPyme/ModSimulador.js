
class ModSimulador{

    Zonas(){

        return cy.xpath('//*[@id="banner-content"]/div[4]/button');
    }

    Close(){

        return cy.get('.modal_close__3L8t2');
    }
    
}
export default ModSimulador