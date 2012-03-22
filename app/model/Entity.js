Ext.define('grants.model.Entity', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'dataType', type: 'auto'},
            {name: 'displayName', type: 'auto'},
            {name: 'value', type: 'auto'},
            {name: 'parent', type: 'auto'}
        ]
    }
});