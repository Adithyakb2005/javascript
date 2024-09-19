// function sample(){
//     a=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     c=parseInt(document.getElementById("mno").value)
//     if (a>b) {
//         document.getElementById("h1").innerHTML=a
//     } 
//     else if(b>c){
//         document.getElementById("h1").innerHTML=b
//     }
//     else{
//         document.getElementById("h1").innerHTML=c
//     }
    
// }




function calcubonus() {
    
   
    
    if (yearsOfService > 5) {
        bonus = salary * 0.05; 
    }

    
    alert("bonus amount is: $" + bonus.toFixed(2));
}


calcubonus();