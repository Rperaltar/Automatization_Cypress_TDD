class ModSimulador{


    Simulador(){

        const modulo = cy.get('.header_header-bottom__28Woc > ul > :nth-child(4) > a')
        modulo.click();
}

    Pagar(){

        const pagar = cy.get(':nth-child(3) > .d-flex > .col-xs-12 > .select_custom-select__1hNCL > .select_select-small__14jN-')
        pagar.click();
}

    Mes12(){

        const mes = cy.get(':nth-child(3) > .d-flex > .col-xs-12 > .select_custom-select__1hNCL > .select_select-items__bmpAA > :nth-child(1) > .select_item__QYZst')
        mes.click();

}

    Plazos(){

        const plazos = cy.get(':nth-child(4) > .d-flex > .col-xs-12 > .select_custom-select__1hNCL > .select_select-small__14jN-')
        plazos.click();
 
}

    PagoMensual(){

        const mensual = cy.get(':nth-child(4) > .d-flex > .col-xs-12 > .select_custom-select__1hNCL > .select_select-items__bmpAA > :nth-child(1) > .select_item__QYZst')
        mensual.click();
}

    AtiguedadEmpresa(){

        const plazos = cy.get(':nth-child(5) > .d-flex > .col-xs-12 > .select_custom-select__1hNCL > .select_select-small__14jN-')
        plazos.click();
 
}

    Masde2Años(){

        const años = cy.get(':nth-child(5) > .d-flex > .col-xs-12 > .select_custom-select__1hNCL > .select_select-items__bmpAA > :nth-child(1) > .select_item__QYZst')
        años.click();

}

    SimularCredito(){

        const credito = cy.get('.order-xs-1 > .btn-medium')
        credito.click();
  }
}

export default ModSimulador