Ext.define("grants.view.SortBar", {
	extend: 'Ext.Toolbar',
	xtype: 'sortbar',
	
	config: {
		cls: 'sort',
		id: 'sortContainer',
		
		items: [
			{
				text: 'Sort By',
				ui: 'forward'
			},
			{
				xtype: 'segmentedbutton',
				id: 'sortBy',
				flex: 1,
				ui: 'light',
				
				layout: {
					pack: 'center'
				},
				
				defaults: {
					xtype: 'button',
					flex: 1
				},
				
				items: [
					{
						text: 'Created Date', 
						pressed: true
					},
					{ text: 'Modified Date' },					
					{ text: 'Status' }
				]
			}
		]
	}
});