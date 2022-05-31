/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let idx=1;
while(idx<=7){
    if(idx%2==1){
        result.push(idx);
    }
    idx++
}

//export result
module.exports = result;