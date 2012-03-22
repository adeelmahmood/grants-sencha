Ext.define('grants.model.FP', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'title', type: 'auto'},
            {name: 'status', type: 'auto', 
				convert: function(value, record){
					var _genStatus = record.get('genStatus');
					return (_genStatus && value != _genStatus) ? value + ' (' + _genStatus + ')' : value;
				}
			},
            {name: 'genStatus', type: 'auto'},
            {name: 'type', type: 'auto'},
            {name: 'fundType', type: 'auto'},
			{name: 'primTheme', type: 'auto'},
            {name: 'company', type: 'auto'},
			{name: 'dept', type: 'auto'},
			{name: 'site', type: 'auto'},
			{name: 'pi', type: 'auto'},
			{name: 'piWithCompany', 
				convert: function(value, record){
					return record.get('pi') + ' (' + record.get('company') + ')';
				}
			},
			{name: 'fundAgency', type: 'auto'},
			{name: 'dateCreated', type: 'date',
				convert: function(value, record){
					var d = new Date(value);
					return (d.getUTCMonth()+1) + "/" + d.getUTCDate() + "/" + d.getUTCFullYear();
				}
			},
			{name: 'dateModified', type: 'date',
				convert: function(value, record){
					var d = new Date(value);
					return (d.getUTCMonth()+1) + "/" + d.getUTCDate() + "/" + d.getUTCFullYear();
				}
			},
			{name: 'dateAwarded', type: 'date',
				convert: function(value, record){
					return value ? '<span title="' + value + '" class="green">Awarded</span>' : '';
				}
			},
			{name: 'irbStudies', type: 'boolean',
				convert: function(value, record){
					return value ? 'Yes' : 'No';
				}
			},
			{name: 'iacucStudies', type: 'boolean',
				convert: function(value, record){
					return value ? 'Yes' : 'No';
				}
			},
			{name: 'projPeriodTotal', type: 'auto'},
			{name: 'url', type: 'auto'}
        ]
    }
});