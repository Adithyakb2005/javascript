// l=[1,2,3,4]
// l1=[...l,5,6]
// console.log(l1);


// d={name:'abc',age:25}
// d1={...d,place:'ekm',name:'abcd',age:24}
// console.log(d1);

// l=[1,2,3,4]
// const[a,...b]=l
// console.log(a);
// console.log('b=',b);

// d={name:'abc',age:25}
// const{name,...d1}=d
// console.log(name);
// console.log(d1);

// asyncronus funcion-----------------
// console.log('start');
// function display(callback){
//     console.log('welcome');
//     console.log('welcome1');
//     console.log('welcome2');
//     setTimeout(function(){
//         console.log('inside funcion');
//         callback()
//     },3000)
// }

// function display1(){
//     console.log('dis');
//     console.log('dis2');
//     console.log('dis3');
    
// }
// console.log('before');
// display(display1)
// console.log('end');
// ----------------------------------------
// console.log('start');
// function display(){
//     setTimeout(function(){
//         console.log('inside funcion');
        
//     },3000)
// }
// console.log('before');
// display()
// console.log('end');
// --------------------------------------

// function display(){
//     console.log('display');
    
// }
// const a=setInterval(display,2000)

let count=10
let c=setInterval(function(){
    console.log(count);
    count--
    if(count==0){
        clearInterval(c)
        console.log('completed');
        
    }
    
},1000)