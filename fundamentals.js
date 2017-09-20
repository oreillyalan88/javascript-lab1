    var aCar = {
        owner : "Joe Bloggs",
        previous_owners : [ { name : 'Pat Smith', address : '1 Main Street'},
                            { name : 'Sheila Dwyer', address : '2 High Street'}],
        type : {make :'Toyota',
                model : 'Corolla',
                cc : '1.8'},
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
    
    
console.log('First owner : ' + aCar.previous_owners[0].name+" and "+aCar.previous_owners[0].address);
console.log('Second owner : ' + aCar.previous_owners[1].name+" and "+aCar.previous_owners[1].address);
console.log(aCar);
