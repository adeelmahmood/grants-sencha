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
			detailPanel: {
				show: 'onDetailViewInitialized'
			}/*,
			budgetsPanel: {
				tapBudgetReport: 'onTapBudgetReport'
			}	*/		
        }
    },
	
	onTapBudgetReport: function(rec, el){
		console.log('onTapBudgetReport');
		console.log(el);
		console.log(rec);
		var url = 'http://javadev.mayo.edu/pride/app/generate-report?directDownload=1&projectId=' + rec.get('displayName') + '&projectOid=' + rec.get('parent') + '&projectType=_Budget&projectStore=MIRISDev&requestor=' + grants.loggedIn.uid + '&requestorRole=adminU&sessionToken=MIRISDev:' + grants.loggedIn.sessionToken + '&fileFormat=pdf&reportType=blocked&watermark=draft&reportPaper=letter&landscape=on';
		console.log(url);
	},
	
	//once the detail panel is intialized just refresh all three inner stores
	onDetailViewInitialized: function(view){
		console.log('detail panel initialized');
		//if revisting same record then no need to refresh the stores
		if(view.getRecord() == grants.currentRecord)	return;
		
		//get all child list components
		var childLists = view.query('dataview');
		for(var i=0; i<childLists.length; i++){
			var childList = childLists[i], childStore = childList.getStore();
			//load the store
			if(!childStore.isLoading()){
				console.log('loading store for ' + childList.getTitle());
				childStore.load({
					params: {
						//get current record id to stores
						id: grants.currentRecord.get('id')
					},
					callback: function(){
						console.log('store loaded for view ');
						console.log(this);
					}
				});
			}
		}
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
		//swtich back to first panel
		this.getDetailPanel().setActiveItem(0);
		//show main panel
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