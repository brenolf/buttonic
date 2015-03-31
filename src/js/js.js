var examples = document.querySelectorAll('div[id^="example"]'),
    length = examples.length,
    i,
    cssrules = document.getElementById('css-rules');


for (i = 0; i < length; i++) {
    var snippet = examples[i];
    var code = snippet.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\t/g, '');

    var pre = document.createElement('pre');
    pre.className = 'prettyprint linenums';
    pre.innerHTML = code.substr(1);

    snippet.parentNode.insertBefore(pre, snippet.nextSibling);
}

cssrules.innerHTML = cssrules.innerHTML.replace(/\t/g, '');