// d={name:'anu',age:20,place:'ekm'}
// console.log(d);
// console.log(d['age']);
// console.log(d.place);

// d.place='tvm'
// console.log(d);
// d['mark']=70
// console.log(d);
// d.lang='malayalam'
// console.log(d);
// delete d.age
// console.log(d);

// for(let i in d){
//     if(d['age']==20){
//         console.log(i,d[i]);
//     }
// }


d=[{name:'anu',age:20,place:'ekm'},{name:'manu',age:30,place:'ekm'},{name:'vinu',age:35,place:'ekm'},{name:'sanu',age:50,place:'ekm'},{name:'ammu',age:22,place:'ekm'},{name:'achu',age:40,place:'ekm'}]
// console.log(d);


// for (let i of d) {
//     if (i['age'] <= 30) {
//         console.log(i);
//     }
// }
// for (let i of d) {
//     if (i['age'] >30) {
//         console.log(i);
//     }
// }
m=[]
n=[]
for (let i of d) {
    if (i.age >30){
        m.push(i)
    }
    else{
        m.push(i)
    }
}
console.log(i);
