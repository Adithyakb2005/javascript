d=[{name:'anu',age:20,place:'ekm'},{name:'manu',age:30,place:'tvm'},{name:'vinu',age:35,place:'edukki'},{name:'sanu',age:50,place:'kottayam'},{name:'ammu',age:22,place:'kollam'},{name:'achu',age:40,place:'alapuzha'}]
function display(){
    const t_var=document.querySelector('#dataTable tbody')
    t_var.innerHTML=''
    d.forEach(element => {
        const t_row=document.createElement('tr')

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        const t_place=document.createElement('td')
        t_place.textContent=element.place
        t_row.appendChild(t_place)

        t_var.appendChild(t_row)
    });
}
document.getElementById('submit').addEventListener('submit',function(event){
    event.preventDefault()  //remove refreshing
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const place=document.getElementById('place').value

    d.push({name:name,age:age,place:place})
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''

    display()
})

display()