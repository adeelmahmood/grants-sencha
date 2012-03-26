Ext.define('grants.store.Attachments', {
	extend: 'Ext.data.Store',
	
	config: {
		//autoLoad: true,		
		model: 'grants.model.Entity',
				
		proxy: {
			type: 'jsonp',
			url: 'http://roegnc801a.mayo.edu/MIRISDev/PublicCustomLayouts/Service/Data/Lookup',
			callbackKey: 'callbackKey',
			extraParams: {
				type: 'ent',
				entity: '_FundingProposal',
				id: '',
				path: 'customAttributes._FP_Documents'
			},
			reader: {
				type: 'json',
				rootProperty: 'nodes'
			}
		}
	},
	
	listeners : {
	   'load' : function(s){
			s.filterBy(function(record, id){
				var displayName = record.get('displayName'), show = false;
				//check number of documents
				if(displayName){
					//make sure its follow Set of Documents (1) format and there are docs
					try{
						if(displayName.match(/^Set of/) && parseInt(displayName.match(/\((\d)\)/)[1]) > 0){
							show = true;
						}					
					}catch(e){	}
				}
				return show;
			});
		}
	}	
});