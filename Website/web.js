function giffunction(){
    document.getElementById("gif1").src="ada.gif";
}
    function imgfunction()
    {
        document.getElementById("gif1").src="adaimage.jpg";
    }
//dropdown menu
    $(document).ready(function(){
        $(".dropdown").hover(function(){
            var dropdownMenu = $(this).children(".dropdown-menu");
            if(dropdownMenu.is(":visible")){
                dropdownMenu.parent().toggleClass("open");
            }
        });
    });  
//changing bg image

 