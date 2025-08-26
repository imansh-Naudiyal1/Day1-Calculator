let display = document.getElementById('calculator');
let buttons = document.getElementById('button');
let result = document.getElementById('display');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const text = e.currentTarget.textContent;
           result.textContent = text;
    })
})