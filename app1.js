// let body=document.body
let btn=document.getElementById('btn');
// let div=document.createElement('div');
// let arr=[];
// body.append(div)
btn.addEventListener('click', () =>{
    let input=document.getElementById('ip').value;
    if(!input)
    {
        return;
    }
    // arr.push(input)
    let text=document.createTextNode(input);
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    // checkbox.style.background="aqua";
    // document.getElementsByName("checkbox").style.backgroundColor="aqua";
    // checkbox.name = "name";
    // checkbox.value = "value";
    let listarea=document.createElement('div');
    listarea.appendChild(checkbox);
    listarea.appendChild(text);
    let list=document.getElementById('My-list').appendChild(listarea);
    // let li=document.createElement('li');
    // // let input=document.getElementById('ip').value;
    // li.innerText=input;
    // newitem.appendChild(checkbox);
    // list.append(li);
    // // newitem.appendChild(list);
    document.getElementById('ip').value='';
    // console.warn("added",arr);
});
let btn1=document.getElementById('btn1');
btn1.addEventListener('click', () =>{
    let item=document.getElementById('My-list');
    item.remove();
});
// console.log(arr);
