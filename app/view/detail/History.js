Ext.define("grants.view.detail.History", {
	extend: 'Ext.List',
	xtype: 'history',
	
	config: {
		title: 'History',
		store: 'History',
		disableSelection: true,
		itemTpl: '{displayName}'
	}
});