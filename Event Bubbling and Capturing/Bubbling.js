let parent = document.getElementsByClassName('parent')[0];
let child = document.getElementsByClassName('child')[0];
let grand_child = document.getElementsByClassName('grand-child')[0];



parent.addEventListener('click',() =>{
    alert('parent clicked...');
})

child.addEventListener('click',() =>{
    alert('child clicked...');
})


grand_child.addEventListener('click',(e) =>{
    e.stopPropagation();
    alert('grand_child clicked...');
})
