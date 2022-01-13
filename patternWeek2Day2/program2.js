let n = 4;
let string = "";
for(let i = -n + 1; i <= n - 1 ; i++){
    if (i == 0) {
        continue;
    }
    for(let j = -n + 1; j <= n - 1 ; j++){
        if (j == 0) {
            continue;
        }
        if(Math.abs(i)+ (Math.abs(j))  <= n  && (Math.sign(i) == Math.sign(j))) {
            string += "@";
        }
        else{
            string += "-";
        }

    }
    string += "\n";
}
console.log(string);