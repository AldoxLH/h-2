/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let wordArray = ["one","two","three","four","five"];


for(let idx=0;idx<numberArray.length;idx++){
    if(numberArray[idx]%2==1){
        result.push(wordArray[idx]);
    }else{
        result.push(numberArray[idx])
    }
}

for(let idx2=0;idx2<stringArray.length;idx2++){
    if(stringArray[idx2]=="foo"){
        let value="";
        for(let idx=0;idx<stringArray[idx2].length;idx++){            
            if(stringArray[idx2].charAt(idx)!="o"){
                value=value+stringArray[idx2].charAt(idx);
            }else{
                value=value+"0";
            }
        }
        result.push(value)
               
    }else if(stringArray[idx2]=="bar"){
        let value= stringArray[idx2].charAt(0).toUpperCase() + stringArray[idx2].slice(1);
        result.push(value);
    }else if(stringArray[idx2]=="baz"){
        let value="";
        for(let idx=0;idx<stringArray[idx2].length;idx++){            
            if(stringArray[idx2].charAt(idx)!="a"){
                value=value+stringArray[idx2].charAt(idx);
            }else{
                value=value+"@";
            }
        }
        result.push(value)               
    }else if(stringArray[idx2]=="qux"){
        let value=  stringArray[idx2].slice(0,2) + stringArray[idx2].charAt(2).toUpperCase();
        result.push(value);
    }else{
        let value="";
        for(let idx=0;idx<stringArray[idx2].length;idx++){
            if(stringArray[idx2].charAt(idx)=="e"){
                value=value+"3";                
            }else if(stringArray[idx2].charAt(idx)=="o"){
                value=value+"0";
            }else{
                value=value+stringArray[idx2].charAt(idx);
            }
        }
        result.push(value);
    }
}

result.splice(numberArray.length, 0, "h@ck")
result.unshift("h@ck");
result.push("h@ck");

//export result
module.exports = result;