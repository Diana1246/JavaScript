 const n = 3.14;
 let height;
 let Radius;
 let result;
 let operator;

 height = prompt( 'height', '');
 Radius = prompt('Radius', '');
 operator = prompt('operator', '');

 
 switch (operator){
        case 'V':
            result = Number(height) * Number(Radius ** 2) * Number(n);
            break;
            default:
            result = 'Not operator';
            break;
        
 }
 

alert(result);


