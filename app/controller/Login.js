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
		//show listing panel
		Ext.Viewport.animateActiveItem(Ext.widget('main'), {
			type: 'fade'
		});
	},
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});