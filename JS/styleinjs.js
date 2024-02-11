const sections=document.querySelectorAll('section');
for(const section of sections){
    section.style.border=' 2px solid black';
   section.style.marginBottom='30px';
   section.style.paddingLeft='7px'
// section.style.textAlign='center'
section.style.borderRadius='20px';
    section.style.backgroundColor='yellow';
}
// const PlaceContainer=document.getElementById('Place-container');
// PlaceContainer.style.backgroundColor='black';
// console.log(PlaceContainer);

const PlaceContainer=document.getElementById('Place-container');
PlaceContainer.classList.add('text-center');
PlaceContainer.classList.remove('large-text');