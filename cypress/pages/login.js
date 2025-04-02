export class loginpage{
    //Creating the Object
    weblocators={
        userid:'#Email',
        password:'#Password'
    }

    //It is coming from config file
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    //Creating the Methods
    enteruserid(USERID){
        cy.get(this.weblocators.userid).type(USERID)
    }

    enterpassword(PASSWORD){
        cy.get(this.weblocators.password).type(PASSWORD)
    }
}