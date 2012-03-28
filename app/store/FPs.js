Ext.define('grants.store.FPs', {
	extend: 'Ext.data.Store',
	
	requires: [
		'grants.model.FP'
	],
	
	config: {
		//autoLoad: true,		
		model: 'grants.model.FP',
		
		/*grouper: function(r){
			//var dc = r.get('dateCreated');
			//var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];			
			//return months[dc.getUTCMonth()] + " " + dc.getUTCFullYear();
			return r.get('pi').split(' ')[0];
		},*/
		
		proxy: {
			type: 'jsonp',
			url: 'http://roeccm002a.mayo.edu/solr/MIRISDev/select',
			callbackKey: 'json.wrf',
			limitParam: 'rows',
			pageParam: 'start',
			extraParams: {
				q: '*:*',
				wt: 'json'
			},
			reader: {
				type: 'json',
				rootProperty: 'response.docs',
				totalProperty: 'response.numFound'
			}
		}
	}
});