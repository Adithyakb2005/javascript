// for loop---------------------

// function sample(){
//     a=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     for(i=a;i<=b;i++){
//         console.log(i);      
//     }
// }

// sum of n numbers------------

// function sample(){
//     a=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     sum=0
//     for(i=a;i<=b;i++){
//         sum+=i
//     }
//     console.log(sum);  
//     document.getElementById("h1").innerHTML=sum
// }

// odd number -------------------

// function sample(){
//     a=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     for(i=a;i<=b;i++){
//         if (i%2!=0){ 
//             console.log(i);  
//         }
//     }
    
// }

// <!-- while loop ------------------------>

// function sample(){
//     i=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     while(i<b){
//         console.log(i);
//         i+=2
        
//     }
// }

// <!-- do while -->

// function sample(){
//     i=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     do{
//         console.log(i);
//         i++
        
//     }
//     while(i<b)
// }

// <!-- factorial of a number -->



function sample(n){
    i=parseInt(document.getElementById("fno").value)
    r=0
    do {
        r *= i;
        i--;
    }
    while (i <= n);
}
