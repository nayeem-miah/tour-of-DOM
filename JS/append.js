//1. where to add
const placesList=document.getElementById('places-list');

// 2.what to be added
const li=document.createElement('li');
li.innerText='pahertoli bon';

// 3. add the child
placesList.append(li);


// ---------------------------------------------------
// 1. where to add 
const mainConatainter=document.getElementById('main-containter');
// 2. word to added 
const section = document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My food list';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='birainy';
ul.appendChild(li1);
const li2=document.createElement('li');
li2.innerText='salat';
ul.appendChild(li2);
const li3=document.createElement('li');
li3.innerText='borhani';
ul.appendChild(li3);

section.appendChild(ul)
mainConatainter.appendChild(section);




// set innerHTML directly

const sectionDress=document.createElement('section');
sectionDress.innerHTML= `
<h1>My dress section </h1>
<ul>
 <li>T-Shirt</li>
 <li>lungi</li>
 <li>gangi</li>
</ul>
`
mainConatainter.appendChild(sectionDress);
