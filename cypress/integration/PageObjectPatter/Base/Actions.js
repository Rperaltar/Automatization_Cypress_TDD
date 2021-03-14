class Actions{
  
    Wait(){

        return cy.wait(1000)
  }
    click(element){

        return cy.get(element).click({ force: true })
  }

    clear(){

        return cy.clear()
  }

    log(text){

       return cy.log(text)
  }

    screenshot(){
  
        return cy.screenshot()
  }
  
    isNotNull(){

        return cy.log('No es Nulo')
    }

        
  }
    export default Actions