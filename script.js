const inputfeild = document.querySelector('#input-feild');
const addbtn = document.querySelector('.btn');
const  listcontainer = document.querySelector('.list-container');
addbtn.addEventListener('click', function() {
    const inputValue = inputfeild.value;
    console.log(inputValue)
    if(inputValue === '') {
        alert('Please Enter a Task');
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputValue;
        listcontainer.appendChild(li);
        inputfeild.value = '';
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        span.addEventListener('click', function() {
            listcontainer.removeChild(li);
        });
    }
    
});