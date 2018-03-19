(function () {
    var body = document.querySelector('body');
    body.style['fontFamily'] = 'monospace';
    body.style['fontSize'] = '2em';
    console.log = function (x) { body.innerText += x + '\n'; };
}());