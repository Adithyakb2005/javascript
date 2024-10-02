function demo(){
    let a='welcome to all'
    console.log(a);
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    let count=59
    let c=setInterval(function(){
        div.innerHTML=`<h2 style="color:blue">03:${count}</h2>`
        count--
        if(count==0){
            clearInterval(c)
            console.log('completed');
            div.innerHTML=`<h2 style="color:blue">completed<h2>`
 
        }
    },1000)

    // div.innerHTML=`<h2 style="color:blue">synnefo ${a}</h2>`
    // div.innerHTML=`<h2><p style=color:blue>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam dolorum corporis consequatur dicta numquam quisquam magni recusandae ad. Error iste tempore incidunt repudiandae repellat odio cumque cum molestias enim.</p></h2>`
    // const h2=document.createElement('h2')
    // h2.textContent=a
    // div.appendChild(h2)

    main.appendChild(div)
}
demo()



