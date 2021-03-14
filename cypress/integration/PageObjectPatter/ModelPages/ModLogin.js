
//(<reference types ="cypress"/>

class ModLogin {


visit(){

    cy.visit('http://temporal-sta-portal-bsi-cr-pyme-web-stg.obe8.bancoppel-dev.openshiftapps.com/inicio', {
  timeout: 50000, // increase total time for the visit to resolve
 })
}

Email(value){
     
    const field = cy.get('#j_username')
    field.clear()
    field.type(value)
   
    return this
}

Passwd(value){
   
    const field = cy.get(':nth-child(2) > .normal')
    field.clear()
    field.type(value)
    
    return this
}

Submmit(){

    const submmit = cy.get('.submit-button')
    submmit.click()
 } 
 
Logout(){

    const logout = cy.get('')
    logout.click()
    
}

}

  export default ModLogin

