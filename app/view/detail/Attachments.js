Ext.define("grants.view.detail.Attachments", {
	extend: 'Ext.List',
	xtype: 'attachments',
	
	config: {
		title: 'Attachments',
		store: 'Attachments',
		disableSelection: true,
		onItemDisclosure: true,	
		itemTpl: '{displayName}'
	}
});