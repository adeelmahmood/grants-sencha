Ext.define("grants.view.detail.Budgets", {
	extend: 'Ext.List',
	xtype: 'budgets',
	
	config: {
		title: 'Budgets',
		store: 'Budgets',
		disableSelection: true,
		onItemDisclosure: true,	
		itemTpl: '{displayName} : <a href="">Budget Report</a>'
	}
});