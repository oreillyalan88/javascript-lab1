    var aCar = {
        owner : "Joe Bloggs",
        previous_owners : [ { name : 'Pat Smith', address : '1 Main Street'},
                            { name : 'Sheila Dwyer', address : '2 High Street'}],
        type : {make :'Toyota',
                model : 'Corolla',
                cc : '1.8'},
                
        features : ['Parking assist', 
                    'Alarm', 
                    'Tow-bar'],
                    
        registration : {year :'10',
                        county : 'WD',
                        number : '1058'}
    };

    
    var layout = {
        exterior : 'red',
        interior: {
            texture : 'leather',
            shade : 'cream'
        }
        
    };
    
        
    aCar.mileage = 80000; 
    aCar.address ="123 Fake Street"
    aCar.color = layout;
    
    for (var i = 0 ; i < aCar.features.length ; i += 1) {
        console.log(aCar.features[i]) ;
    } 
    
    for (var i = 0 ; i < aCar.previous_owners.length ; i += 1) {
        console.log(aCar.previous_owners[i].name) ;
    } 
    
    
    for (var p in aCar.type)  {
        console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
    }
    
    console.log('First owner : ' + aCar.previous_owners[0].name+" and "+aCar.previous_owners[0].address);
    console.log('Second owner : ' + aCar.previous_owners[1].name+" and "+aCar.previous_owners[1].address);
    console.log(aCar);
