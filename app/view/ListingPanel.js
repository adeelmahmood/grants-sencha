Ext.define("grants.view.ListingPanel", {
	extend: 'Ext.TabPanel',
	xtype: 'listingpanel',
	
	requires: [
		'grants.view.listing.MyTasks'
	],
	
	config: {
		tabBarPosition: 'bottom',
		defaults: {
			styleHtmlContent: true,
			padding: 0
		},
		
		items: [
			{
				xtype: 'mytasks'
			},
			{
				title: 'In Progress',
				iconCls: 'more'
			},
			{
				title: 'Pending',
				iconCls: 'time'
			}
			
		]
	}
});