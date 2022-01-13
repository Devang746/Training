let n = 5
let string = "";
for (let i = 0; i <= n; i++){
    //console.log(i);
    for( let j = 0; j < i; j++){
        string += "*";
        //console.log(i);
    }
    //string += " *";
    string = string + "\n";
}
console.log(string);
