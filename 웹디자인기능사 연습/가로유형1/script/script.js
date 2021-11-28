<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
    $("nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
        //$(this).find(".submenu").stop().show(200);
    });
    $("nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
        //$(this).find(".submenu").stop().hide(200);
    });
</script>