Ext.define("grants.view.detail.Budgets", {
	extend: 'Ext.List',
	xtype: 'budgets',
	
	config: {
		title: 'Budgets',
		iconCls: 'favorites',
		store: 'Budgets',
		disableSelection: true,
		onItemDisclosure: true,	
		itemTpl: '<div>{displayName} : <button>Budget Report</button></div>',
		
		listeners: {
			itemtap: function(dv, i, t, r, evt){
				//get the selected element
				var el = Ext.get(evt.target);
				//fire the budget report event
				if(el.dom.nodeName == 'BUTTON'){
					this.fireEvent('tapBudgetReport', r, el);
				}
			}
		},
	}
});