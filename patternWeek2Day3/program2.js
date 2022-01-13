let n = 5;
let string = "";
for (let i = -n; i <= n; i++) {

    for (let j = -n; j <= n; j++) {
        if (Math.abs(j) == n + 1 || Math.abs(i) == n) {
            string += "0";
        }
        else if (Math.abs(j) == n || Math.abs(i) == n) {
            string += "O";
        }
        



        else if (Math.abs(i) - Math.abs(j) >= 0) {
            //string += " ";
            if (i < 0 && j > 0  || i > 0 && j < 0) {
                //string += "";
                string += Math.abs(i) - Math.abs(j) + 1 ;
            }
            else{
                string += " ";
            }
        }
        else if (Math.abs(i) - Math.abs(j) <= 0) {
            if (i - j >= 0) {
                string += (i + 1) - (j + 1)
            }
            else{
                string += " ";
            }
        }
        
        else{
        string += " ";
        }
    }
    string += "\n";
}
console.log(string);