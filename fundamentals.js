    var aCar = {
        owner : "Joe Bloggs",
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
    aCar.color = layout;
// aCar.color.interior.textrue = 'leather';
// aCar.color.interior.shade = 'crean';


console.log('Its a '+aCar.color.exterior+" car, "+aCar.mileage+", and "+aCar.color.interior.texture+' interior.' );
