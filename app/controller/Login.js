Ext.define('grants.controller.Login', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			main: 'main',
            loginPanel: 'login',
			loginButton: 'login button[action=login]'
        },
        control: {
            loginButton: {
				tap: 'onLoginButton'
			}
        }
    },	
	
	onLoginButton: function(loginButton){
		console.log('login');
		//collect form data
		var formValues = this.getLoginPanel().getValues();
		if(formValues && formValues.uid){
			//disable the login button
			loginButton.disable();
		
			//send form data in a json request
			Ext.data.JsonP.request({
				url: 'http://roegnc801a.mayo.edu/MIRISDev/PublicCustomLayouts/Service/Login',
				callbackKey: 'callbackKey',
				params: formValues,
				success: function(result){
					console.log('login results received');
					if(result && result.loggedIn){
						//store logged in information
						grants.loggedIn = result;
						//show listing panel
						Ext.Viewport.animateActiveItem(Ext.widget('main'), {
							type: 'fade'
						});
					}
					else{
						Ext.Msg.alert('invalid login info');
						//disable the login button
						loginButton.enable();
					}
				},
				failure: function(){
					Ext.Msg.alert('error');
					//disable the login button
					loginButton.enable();
				}
			});
		}
	},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});