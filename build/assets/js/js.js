var examples=document.querySelectorAll('div[id^="example"]'),length=examples.length,i,cssrules=document.getElementById("css-rules");for(i=0;length>i;i++){var snippet=examples[i],code=snippet.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\t/g,""),pre=document.createElement("pre");pre.className="prettyprint linenums",pre.innerHTML=code.substr(1),snippet.parentNode.insertBefore(pre,snippet.nextSibling)}cssrules.innerHTML=cssrules.innerHTML.replace(/\t/g,"");