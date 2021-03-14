const { } = require('cypress-xpath');

class ModInicio{

    SolicitaTuCredito(){

        return cy.get(':nth-child(2) > .btn-medium');
    }

    MasSobreCredito(){

        return cy.get('.col-md-12 > .btn-link-arrow-right-inverted');
    }

    VerRequisitos(){

        return cy.xpath('');
    }
}
    export default ModInicio


