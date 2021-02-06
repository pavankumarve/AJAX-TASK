'use strict';
// for first data
// const x = new XMLHttpRequest();
// x.open('GET' ,'https://jsonplaceholder.typicode.com/users');
// x.send();
// x.addEventListener('load',()=>{
//    // console.log(x);
//     //console.log(x.responseText);
//     //console.log(JSON.parse(x.responseText)); 
//     const e = JSON.parse(x.responseText);
//     const firstData=e[0];
//     console.log(firstData);
// //console.log(e);
// const tr= document.createElement('TR');
// const td1= document.createElement('TD');
// const td2= document.createElement('TD');
// const td3= document.createElement('TD');
// const td4= document.createElement('TD');
// td1.innerText = 1;
// td2.innerText = firstData.name;
// td3.innerText = firstData.username;
// td4.innerText = firstData.email;
// //console.log(td1,td2,td3,td4);

// tr.append(td1,td2,td3,td4);

// const list=document.getElementById('employee-details');
// list.append(tr);
// })
const list = document.getElementById('employee-details');
const x = new XMLHttpRequest();
x.open('GET', 'https://jsonplaceholder.typicode.com/users');
x.send();
x.addEventListener('load', () => {
    const emp = JSON.parse(x.responseText);
    // console.log(emp);
    emp.forEach((e, i) => {
        const tr = document.createElement('TR');
        const td1 = document.createElement('TD');
        const td2 = document.createElement('TD');
        const td3 = document.createElement('TD');
        const td4 = document.createElement('TD');
        const td5 = document.createElement('TD');
        const td6 = document.createElement('TD');
        td1.innerText = 1 + i;
        td2.innerText = e.name;
        td3.innerText = e.username;
        td4.innerText = e.email;
        td5.innerText = e.phone;
        td6.innerText = e.company.name;


        tr.append(td1, td2, td3, td4, td5, td6);
        list.append(tr);

    });

});



