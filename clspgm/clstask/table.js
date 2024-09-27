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

        const e_td=document.createElement('td')
        const e_btn=document.createElement('button')
        e_btn.textContent='edit'
        e_btn.onclick=function(){
            edit_frm(element.name)
        }
        e_td.appendChild(e_btn)
        t_row.appendChild(e_td)

        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'
        del_btn.onclick=function(){
            delete_data(element.name)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

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
let edit_name
function edit_frm(name){
    console.log('editing',name);
    document.getElementById('edit_form').style.display='block'
    document.getElementById('submit').style.display='none'
    const edit_data=d.find(user=>user.name==name)
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    document.getElementById('e_place').value=edit_data.place
    edit_name=name
    
}
document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault() 
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_place=document.getElementById('e_place').value
    d=d.map(user=>{
        if(user.name==edit_name){
            return{...user,name:e_name,age:e_age,place:e_place}
        }
        return user
    })
    document.getElementById('edit_form').style.display='none'
    document.getElementById('submit').style.display='block'
    display()
})

function delete_data(name){
    d=d.filter(user=>{
        if(user.name!=name){
            return user
        }
    })
    display()
    
}
display()