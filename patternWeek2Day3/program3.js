let n = 5;
let string = "";

for (let i = -(n + 1); i <= n + 1; i++) {
    for (let j = -(n + 1); j <= n + 1; j++) {

        if (j == -(n + 1) || j == n + 1) {
            string += "|";
        }
        else if (i == -(n + 1) || i == n + 1) {
            string += "=";
        }
        else if (i == 0 && j == 0) {
            string += "x";
        }
        else if (j == 0 || i == 0) {
            string += "0";
        }
        else if (i == j) {
            string += "\\";
        }
        else if (Math.abs(i) == Math.abs(j)) {
            string += "/";
        }
        else if (Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0) {
            string += Math.abs(j);
        }
        else if (Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) <= 0 && i != 0) {
            string += n - Math.abs(j) + 1;
        }
        else if (Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >= 1) {
            string += String.fromCharCode(Math.abs(j) + 97);
        }
        else if (Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) <= 1) {
            string += String.fromCharCode(n- Math.abs(j) + 97 + 1);
        }
        else {
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);