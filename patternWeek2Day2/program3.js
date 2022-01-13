let n = 5;
let string = "";

for(let i = 0 ; i < n ; i ++){
    for(let j = 0 ; j < n ; j ++){
        if( i == ((n-1)/2) && j == ((n-1)/2)){
            string+="o";
        }
        
        else if (i + j == n-1 ) {
            string += "/";
        }
        // else if (n/2 == 0) {
        //     continue;
        // }
        else if(i == j ){
            string += "\\"
        }
        else if( i == 0 || i == n-1){
            string += "-";
        }
        else if ( j == 0 || j == n-1 ) {
            string += "|"
        }
        else{
            string += " ";
        }
    }
    string += "\n";

}
console.log(string);