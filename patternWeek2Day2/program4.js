
let n = 5;
let string = "";
for (let i = -n; i <= n; i++) {
  
  for (let j = -n; j <= n ; j++) {
      if (Math.abs(i) == n || Math.abs(j) == n ) {
          string += "0";
      }
      else if (Math.abs(i) - Math.abs(j)>=0) {
          if (i < 0 && j > 0 || (i > 0 && j < 0)) {
              string += Math.abs(i) - Math.abs(j) + 1;   
          }
          else{
              string += String.fromCharCode(Math.abs(i) - Math.abs(j) + 97);
          }
        
        string += "";
      }

      
      else{
          string += " ";
      }
    
  }
  string += "\n";
}
console.log(string);