$("#ccje > div:gt(0)").hide();
setInterval(function() { 
$('#ccje > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#ccje');
},  3000);

$("#walk > div:gt(0)").hide();
setInterval(function() { 
$('#walk > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#walk');
},  3000);