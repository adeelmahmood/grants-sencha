Ext.define("grants.view.Main", {
    extend: 'Ext.Container',
    xtype: 'main',
	
	requires: [
		'grants.view.ListingPanel',
		'grants.view.DetailPanel'
	],
    
    config: { 
		layout: {
			type: 'card',
			animation: {
				type: 'fade'
			}
		},
	
        items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Grants',
				
				items: [
					{
						iconCls: 'search',
						iconMask: true,
						ui: 'plain'
					},
					{ xtype: 'spacer' },
					{
						text: 'Sign Out',
						id: 'signoutButton'
					}
				]
			},
			{
				xtype: 'listingpanel'
			}
        ]
    }
});