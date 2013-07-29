$('div[id^="example"]').each(function(){
	var o = $(this);
	var code = o.html().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\t/g, '');
	o.after('<pre class="prettyprint linenums" id="flat-code">' + code + '</pre>');
});

$('#css-rules').html($('#css-rules').html().replace(/\t/g, ''));