l=[1,2,3,4,5]

// console.log(l);
// console.log(l[0]);
// console.log(l[3]);
// console.log(l.length);
// a=l.toString()
// console.log(a)
// l.pop()
// console.log(l);
// l.push(10)
// console.log(l);

// //shift(delete)
// l.shift()
// console.log(l);
// //unshift(add)
// l.unshift(101)
// console.log(l[0]);
// console.log(l);
// //delete
// delete l[0]
// console.log(l);

// for(let i in l){
//     console.log(l[i]);
    
// }
// for(let i of l){
//     console.log(i);
    
// }       

for(let i of l){
    console.log(i);
    if(i==5){
        break
    }
}  

for(let i of l){
    
    if(i==5){
        console.log(i);
    }
} 