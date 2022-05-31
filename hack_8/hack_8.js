/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for(let idx=0;idx<arr.length;idx++){
    if(arr[idx]=="bar"||arr[idx]=="baz"){ 
        let value="";
        for(let idx2=0;idx2<arr[idx].length;idx2++){
            if(arr[idx].charAt(idx2)=="a"){
                value=value+"@";
            }else{
                value=value+arr[idx].charAt(idx2);
            }
        }
        result.push(value);           
        
        /*let val = arr[idx].split("");
        val.splice(1,1,"@");
        let val2=val.join("");
        result.push(val2);*/
    }else{
        if(arr[idx]=="qux"){
        value = arr[idx].toUpperCase();
        result.push(value);
        }
    }
}


//export result
module.exports = result;