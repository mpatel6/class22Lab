
(function($, window, document){
    $(function(){
       var $calculateRectArea = $('#calculateRectArea');
       
        $calculateRectArea.click(function() {
            var length = prompt("Please enter length");
            var width = prompt("Please enter width");
            $("#rectAreaResult").html("Rectange Area is: "+ length*width);
        });
        
        
    });
}(window.jQuery, window, document));


