let n = 3;
let string = "";
for (let i = 0 ; i < 3 *n +2 ; i++){
    for(let j = -n ; j < n + 1 ; j ++){
        if(i == j && j == 0){
            string += "O";

        }
        else if ((i > 2 * n) && (j == 0)) {
            string += "=";
        }
        else if (i == 3 * n + 1) {
            string += "=";
        }
        else if ((i > 2 * n ) && (Math.abs(j) == 1)) {
            string += "|";
        }
        else if ((i+j==0) || ((j < 0 ) && (Math.abs(i) - Math.abs(j) == n))) {
            string += "/";
        }
        else if ((i-j==0) || (( j > 0) && (Math.abs(i) - Math.abs(j) == n))) {
            string += "\\";   
        }
        else if (((i <= n) && (Math.abs(i) - Math.abs(j) > 0)) || (( i <= 2 * n ) && (Math.abs(i) - Math.abs(j) >= n))) {
            string += "-";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);
