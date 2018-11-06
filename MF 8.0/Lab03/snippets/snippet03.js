displayLogin() {
    //start with some ionic2 alert sample code here
    let prompt = Alert.create({
        title: 'Login',
        message: "Enter your login information here",
        inputs: [
            {
                name: 'username',
                placeholder: 'Username'
            },
            {
                name: 'password',
                placeholder: 'Password',
                type: 'password'
            }
        ],
        buttons: [
            {
                text: 'Login',
                handler: data => {
                    console.log('--> Trying to auth with user', data.username);
                    this.AuthHandler.submitChallengeAnswer(data);
                }
            }
        ]
    });
    this.nav.present(prompt);
}//end of displayLogin
