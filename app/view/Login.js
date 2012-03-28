Ext.define("grants.view.Login", {
	extend: 'Ext.form.FormPanel',
	xtype: 'login',
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet'
	],
	
	config: {
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
						label: 'LAN ID',
						name: 'uid'
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