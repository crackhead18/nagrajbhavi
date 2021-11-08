let hellobtn = document.querySelector('button');
hellobtn.addEventListener('click',getMsg);

function getMsg(){
    let name = prompt('enter the name of the student');
    hellobtn.textContent = 'Hello!' + name;
}
