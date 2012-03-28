Ext.define("grants.view.detail.Attachments", {
	extend: 'Ext.List',
	xtype: 'attachments',
	
	config: {
		title: 'Docs',
		iconCls: 'folder',
		store: 'Attachments',
		disableSelection: true,
		onItemDisclosure: true,	
		itemTpl: '{displayName}'
	}
});