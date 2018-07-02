$(document).ready(function(){
    $("#Colored path, #Colored polygon, #Colored rect, #Colored polyline, #Sports_A path, #Sports_A polyline, #Perimeter polyline, #Perimeter rect, #Green_A path, #Green_A polygon, #Green_A rect, #Green_A polyline").click(function(){
        var bldg = $(this).attr('id');
        //alert(bldg);
    });
});


$('#btn-test1').on("click", function() {
    $('#path1').css({ fill: "#ff0000" });
});
//$("#StAugustineHall").click(function(){
 //   $('#myModal').modal(); 
//});
