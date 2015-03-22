$( document ).ready(function() {
    $( "#portfolio div[class^='col-md']" ).each(function( i ) {
        img=$(this).css("background-image");
        url=img.substring(img.search("folio"), img.length-2);

        if (img!="none") {
            $(this).append('<a href="'+url.replace("thumbs/", "")+'" data-gallery=""><img src="'+url+'"></a>');
            $(this).removeAttr("style");
            $(this).removeClass( "md lg sm fi").addClass("fi");
        }
    });
});

$( document ).ready(function() {
    $( "#portfolio div[class^='col-md']" ).each(function( i ) {

        var img = $(this).find('img');
        var url = $(this).find('img').attr('src');
        img.attr('alt', url);
    });
});