Ext.define('grants.controller.Detail', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'main',
			detailPanel: 'detailpanel',
			budgetsPanel: 'budgets',
			historyPanel: 'history',
			attachmentsPanel: 'attachments'
        },
        control: {            
			'#detailBackButton': {
				tap: 'onDetailBack'
			},
			'#detailWebsiteButton': {
				tap: 'onGoToWebsite'
			},
			budgetsPanel: {
				show: 'onInnerViewInitialized'
			},
			historyPanel: {
				show: 'onInnerViewInitialized'
			},
			attachmentsPanel: {
				show: 'onInnerViewInitialized'
			}
        }
    },	
	
	//inner view(s) initilized
	onInnerViewInitialized: function(view){
		console.log('initializing inner view ' + view.getTitle());
		var viewStore = view.getStore();
		//no need to load if already loaded for same record
		if(viewStore.isLoaded() && (grants.currentRecord == grants.lastRecord || !grants.lastRecord))	return;
		//initialize the store on first load of view
		viewStore.load({
			params: {
				id: grants.currentRecord.get('id')
			},
			callback: function(){
				console.log('store for view ' + view.getTitle() + ' loaded');
				view.setStore(viewStore);
			}
		});
	},	
	
	//go to website button
	onGoToWebsite: function(){		
		var activeRecord = grants.currentRecord ? grants.currentRecord : this.getDetailPanel().getActiveItem().getRecord();
		if(activeRecord){
			location.href = unescape(activeRecord.get('url'));
		}
	},
    
	//back button on detail panel
	onDetailBack: function(){	
		//set last viewied item
		grants.lastRecord = grants.currentRecord;
	
		Ext.Viewport.animateActiveItem(this.getMain(), {
			type: 'slide',
			direction: 'right'
		});
	},	
	
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log('detail controller');
    }
});