import { loginpage } from "../pages/login"
const loginObj= new loginpage()
describe('Login Test', ()=>{

    it('Login', ()=>{
        loginObj.openURL()
        loginObj.enteruserid()
        loginObj.enterpassword()

    })
})