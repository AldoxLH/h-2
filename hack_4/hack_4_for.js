/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
for(let idx=1;idx<=7;idx++){
    if(idx%2==1){
        result.push(idx);
    }
}


//export result
module.exports = result;