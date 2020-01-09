const myNotes = document.getElementById('my-notes');

for(let i=0; i<myNotes.children.length; i++){
    myNotes.children[i].addEventListener('click', (elem)=>{
        elem.target.style.backgroundColor = 'yellow';
        elem.target.style.color = 'black';
    });
}