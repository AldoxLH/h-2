/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
for(let idx=7;idx>=1; idx--){
    if(idx%2==1){
        result.push(idx);
    }
}


//export result
module.exports = result;