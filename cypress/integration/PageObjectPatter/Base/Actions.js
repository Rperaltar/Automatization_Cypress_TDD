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

    static pause(ms) {
        cy.wait(ms)
    }

    static logInfo(message) {
        cy.log(message)
    }

    static setMobileViewport() {
        cy.viewport('iphone-x')
    }

    static setTableViewport() {
        cy.viewport('ipad-2')
    }

    static setDesktopViewport() {
        cy.viewport('macbook-13')
    }

    static setLargeDesktopViewport() {
        cy.viewport('macbook-15')
    }
  }
    export default Actions
  