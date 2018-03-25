var heading = document.getElementById('clack');

var count = 1;

heading.addEventListener('click', function () {
    var para = document.createElement('p');
    para.textContent = 'This is click number ' + count++;
    document.body.appendChild(para);
});
