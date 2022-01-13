var n = 5
var string = "";
for (let i = 1; i <= n; i++){
    
    for( let j = 1; j <= n; j++){
        if (i + j <= n) 
        {
            string +=" ";
            
        }
        else{
            string += "*"
        }
       
    }
    
    string = string + "\n";
}
console.log(string);
