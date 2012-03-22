Ext.define("grants.view.Login", {
	extend: 'Ext.form.FormPanel',
	xtype: 'login',
	
	config: {
		url: '',
		
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Grants'
			},			
			{
				xtype: 'fieldset',
				title: 'Login',
				instructions: 'password is not needed for this application',
				
				items: [
					{
						xtype: 'textfield',
						label: 'Enter Your LAN ID',
						name: 'lanId'
					}
				]
			},
			{
				xtype: 'button',
				text: 'Submit',
				ui: 'confirm',
				action: 'login'
			}
		]
	}
});