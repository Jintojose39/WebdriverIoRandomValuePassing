

class LoginPage  {

    constructor(){

        this.$enteremail=()=>$('//input[@id="user_email_login"]');
        this.$enterPassword=()=>$('//input[@id="user_password"]');


    }

    async openHomepage(url){

        await browser.url(url);
    }

    async loginActions(randommailid,randomPassword){

        await this.$enteremail().setValue(randommailid);
        await this.$enterPassword().setValue(randomPassword)


    }
    
}

export default new LoginPage();
