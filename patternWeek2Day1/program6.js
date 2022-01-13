let n = 4;
let string = "";

for(let i = 0 ; i < n ; i ++){
    //console.log(i);
    for(let j = -4 ; j < n - 1 ; j ++){
        if (i - Math.abs(j) >= 0) {
            string += i - Math.abs(j) + 1;
        }
            else{
                string += "*";
            }
        }
        string += "\n";
        }
        console.log(string);

       






