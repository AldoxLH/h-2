/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let idx=7;
while(idx>=1){
    if(idx%2==1){
        result.push(idx);
    }
    idx--
}

//export result
module.exports = result;