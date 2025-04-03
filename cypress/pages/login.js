export class loginpage{
    //Creating the Object
    weblocators={
        Userid:'input#Email',
        Password:'#input#Password'
    }

    //It is coming from config file
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    //Creating the Methods
    enteruserid(USERID){
        cy.get(this.weblocators.Userid).type(USERID)
    }

    enterpassword(PASSWORD){
        cy.get(this.weblocators.Password).type(PASSWORD)
    }
}