let n = 5;
let string = "";

for (let i = -n-1; i <= n+1; i++) {
    for (let j = -n-1; j <= n+1; j++) {

        if (i==0 && j==0) {
            string += "o"
        }
        else if (j==(n+1) || j==-(n+1)) {
            string += "o"
        }
        else if (i==(n+1) || i==-(n+1)) {
            string += "0";
        }
       
        else if ((Math.sign(i)!=Math.sign(j)) && (Math.abs(i)-Math.abs(j)<=0) && i!=0) {
            string += n - Math.abs(j) +1;
        } 
   
        else if ((Math.sign(i)==Math.sign(j)) && (Math.abs(i)-Math.abs(j)>=0)) {
           string += Math.abs(j);
        }
        else {
            string += " ";
        }
    
    }

    string += "\n";
}

console.log(string);