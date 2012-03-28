Ext.define('grants.controller.Login', {
    extend: 'Ext.app.Controller',
    
	requires: ['Ext.data.proxy.JsonP'],
	
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
				url: 'http://roegnc801a.mayo.edu/MIRISDev/PublicCustomLayouts/Service/Login?fetchSession=1',
				callbackKey: 'callbackKey',
				params: formValues,
				success: function(result){
					console.log('login results received');
					if(result && result.loggedIn){
						//store logged in information
						grants.loggedIn = result;
						
						if(!this.mainPanel)	this.mainPanel = Ext.widget('main');
						//show listing panel
						Ext.Viewport.animateActiveItem(this.mainPanel, {
							type: 'fade'
						});
					}
					else{
						Ext.Msg.alert('invalid login info');						
					}
					//enable the login button
					loginButton.enable();
				},
				failure: function(){
					console.log(arguments);
					Ext.Msg.alert('error');
					//enable the login button
					loginButton.enable();
				}
			});
		}
	},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});