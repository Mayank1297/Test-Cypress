import { loginpage } from "../../pages/login"
const loginObj= new loginpage()
import loginData from '../../fixtures/loginData.json'
describe('Login_Test', ()=>{

    it('Login', ()=>{
        loginObj.openURL()
        loginObj.enteruserid(loginData.userid)
        loginObj.enterpassword(loginData.password)

    })
})