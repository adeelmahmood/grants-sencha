//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'grants',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'Login'],
	controllers: ['Login', 'Detail', 'Listing'],
	models: ['FP', 'Entity'],
	stores: ['FPs', 'Budgets', 'History', 'Attachments'],

    viewport: {
		autoMaximize: true // Causes the URL bar to be hidden once the application loads.
    },
	
	icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add({
			xtype: 'main'
		});
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
