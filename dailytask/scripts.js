// question 1
function sample(){
    e=parseInt(document.getElementById("expre").value)
    y=parseInt(document.getElementById("salary").value)
    if(y>5){
        document.getElementById("h1").innerHTML=(y*0.05)+y
    }
    else{
        document.getElementById("h1").innerHTML=y
    }
}

// // question 2
function sample1(){
    u=parseInt(document.getElementById("units").value)
    if(u<=100){
        document.getElementById("h1").innerHTML=0
    }
    else if(u<=200){
        document.getElementById("h1").innerHTML=(u-100)*5
    }
    else{
        document.getElementById("h1").innerHTML=(u-200)*10+500
    }
}
// question 3
function sample2(){
    d=parseInt(document.getElementById("num").value)
    if(d==1){
        document.getElementById("h1").innerHTML='Sunday'
    }
    else if(d==2){
        document.getElementById("h1").innerHTML='Monday'
    }
    else if(d==3){
        document.getElementById("h1").innerHTML='Tuesday'
    }
    else if(d==4){
        document.getElementById("h1").innerHTML='Wednesday'
    }
    else if(d==5){
        document.getElementById("h1").innerHTML='Thursday'
    }
    else if(d==6){
        document.getElementById("h1").innerHTML='Friday'
    }
    else{
        document.getElementById("h1").innerHTML='Saturday'
    }
}
// question 4

function sample3(){
    c=document.getElementById("city").value
    
    if(c=='delhi'){
        document.getElementById("h1").innerHTML='Red Fort'
    }
     else if(c=='agra'){
        document.getElementById("h1").innerHTML='Taj Mahal'
    }
     else if(c=='jaipur'){
        document.getElementById("h1").innerHTML='Hava Mahal'
    }
    else{
        document.getElementById("h1").innerHTML='invalid city'
    }
}
// question 5
function sample4(){
    n=parseInt(document.getElementById("num").value)
    const d=n%10
    if (d%3==0){
        document.getElementById("h1").innerHTML=' divisible by 3'  
    }
    else{
        document.getElementById("h1").innerHTML='not divisible by 3 '
    }
}
function sample5(){
    p=parseInt(document.getElementById("price").value)
    if (p>100000){
        document.getElementById("h1").innerHTML=p*0.15  
    }
    else if(p>50000 && p<=100000){
        document.getElementById("h1").innerHTML=p*0.10
    }
    else if(p<=50000){
        document.getElementById("h1").innerHTML=p*0.05
    }
    else{
        document.getElementById("h1").innerHTML='no tax'
    }
}