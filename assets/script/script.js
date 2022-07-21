var elementAdd = document.getElementById('adicionar');
var elementSub = document.getElementById('subtrair');
var display = document.getElementById('count');
var count = 0;

elementAdd.addEventListener('click', function() {
    count++
    display.innerHTML = count;
});

elementSub.addEventListener('click', function() {
    count--
    display.innerHTML = count;
})

