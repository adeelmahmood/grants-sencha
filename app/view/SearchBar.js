Ext.define("grants.view.SearchBar", {
	extend: 'Ext.form.Panel',
	xtype: 'searchbar',
	
	config: {
		scrollable: false,
		cls: 'search',
		id: 'searchContainer',
		
		items: [
			{
				xtype: 'textfield',
				clearIcon: true,
				labelWidth: 0,
				inputCls: 'searchField',
				placeHolder: 'Enter Search Term',
				id: 'searchField'
			}
		]
	}
});