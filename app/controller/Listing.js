Ext.define('grants.controller.Listing', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			main: 'main',
			loginPanel: 'login',
            searchButton: 'main toolbar button[iconCls=search]',
			signoutButton: 'main toolbar #signoutButton',
			
			listingPanel: 'listingpanel',
			searchField: '#searchField',
			
			detailToolbar: 'detailpanel titlebar'
        },
        control: {
			searchButton: {
				tap: 'onSearchButton'
			},
			searchField: {
				action: 'onSearch',
				change: 'onSearch',
				clearicontap: 'onSearchClear'
			},
			'dataview' : {
				tapListingItem : 'onTapListingItem'
			},
			signoutButton: {
				tap: 'onSignoutButton'
			}
        }
    },
    
	//scroll to top to focus on search field
	onSearchButton: function(searchButton){
		var list = this.getListingPanel().getActiveItem();
		list.getScrollable().getScroller().scrollTo(0, 0, 'animation');
	},
	
	//perform the search
	onSearch: function(searchField){
		//get the list
		var list = this.getListingPanel().getActiveItem();
		//get listing store
		var listingStore = list.getStore(),
            value = searchField.getValue();
		
		//make sure a search value was provided
        if (value != '') {
            list.setMasked({ xtype: 'loadmask' });
            listingStore.load({
                params: { 
					q:  searchField.getValue() 
				},
                callback: function() {
					console.log('search applied');
                    list.setStore(listingStore);
                    list.setMasked(false);
                },
                scope: this
            });
        }
	},
	
	//clear the search
	onSearchClear: function(){
		//get the list
		var list = this.getListingPanel().getActiveItem();
		//get listing store
		var listingStore = list.getStore();
        
		//reload the store with reset params
		listingStore.load(function(){
			list.setStore(listingStore);
			console.log('search cleard');
		}, this);	
	},
	
	//listing item selected event
	onTapListingItem: function(record){
		console.log('tap listing item event called');
		grants.currentRecord = record;
		
		//get a hold of details panel (create if needed)
		if(!this.detailPanel)
			this.detailPanel = Ext.widget('detailpanel');

		//update title on details toolbar
		this.getDetailToolbar().setTitle(record.get('id'));
		
		//show details panel
		Ext.Viewport.animateActiveItem(this.detailPanel, {
			type: 'slide',
			direction: 'left'
		});
		
		//provide data
		this.detailPanel.setRecord(record);
	},
	
	//signout
	onSignoutButton: function(signoutButton){
		//clear logged in user
		grants.loggedIn = null;
		//show login panel
		Ext.Viewport.animateActiveItem(this.getLoginPanel(), {
			type: 'fade'
		});
	},
	
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log('Listing controller launched');
		grants.currentRecord = null;
		grants.lastRecord = null;
    }
});