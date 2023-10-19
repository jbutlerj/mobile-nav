// function import
import { changeRoute } from "../model/model.js";

// listener for clicks
function initListeners() {
    $(".bars").click(function(e){
        $('.bars').toggleClass("active");
        $('.links').toggleClass("active");
    });

    if ($(window).width() <= 960) {
        $(".links a").click(function(e){
            $('.bars').toggleClass("active");
            $('.links').toggleClass("active");
        });
    };
    
    // takes hash from active anchor
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function(){
    initListeners();
});