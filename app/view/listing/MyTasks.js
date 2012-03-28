Ext.define("grants.view.listing.MyTasks", {
	extend: 'Ext.List',
	xtype: 'mytasks',
	
	requires: [
		'grants.view.SearchBar',
		'grants.view.SortBar',
		'Ext.plugin.ListPaging'
	],
	
	config: {
		title: 'My Tasks',
		iconCls: 'user_list',
		store: 'FPs',
		itemTpl: [			
			'<div style=\'font-weight: bold;\'>{id}: {title}</div><div>{piWithCompany}</div>',
			//'<div style=\'color: #999;\'><u>Created</u>:{dateCreated} <u>Last Modified</u>: {dateModified}</div>',
			'<div><i>Status</i>: {status} {dateAwarded}</div>'
		],
		
		//hide the top search and sort bar initially
		scrollable: {
			initialOffset: {
				y: 75
			}
		},
		
		listeners: {
			itemtap: function(dv, i, t, r, evt){
				//get the selected element
				var el = Ext.get(evt.target);
				//fire the selected event
				this.fireEvent('tapListingItem', r, el);
			}
		},
		
		plugins: [
			{
				xclass: 'Ext.plugin.ListPaging'
			}
		],
				
		items: [
			{
				xtype: 'searchbar'
			},
			{
				xtype: 'sortbar'
			}
		]
	},	
	
	initialize: function(){
		this.callParent();
		console.log('mytasks list init');
		var uname = grants.loggedIn ? grants.loggedIn.name : '';
		//initialize the store on first load of view
		this.getStore().load({
			params: {
				q: uname&&0 ? '(' + [
					'preSpec:"' + uname + '"',
					'postSpec:"' + uname + '"',
					'pi:"' + uname + '"',
					'proxies:"' + uname + '"'
				].join(' OR ') + ')' : '*:*'
			}
		});
	}
});