AuthInit() {
    this.AuthHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");
    this.AuthHandler.handleChallenge = ((response) => {
        //handle success
        console.log('--> Inside handleChallenge');
        this.displayLogin(); //display ionic2 login alert which we will define in next step
    })
}//end of AuthInit