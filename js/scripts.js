// Sleep function for color cycling, sourced from
// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}        

// Reformats rgb as into string to pass as attribute value
// Option to set opacity for different instances
let packRGBA = function(r, g, b, a=0.25) {
    return "rgba("+r+", "+g+", "+b+", "+a+")";
}

// On page load, get three random RGB triples
// Use them to set the background and link colors
let colors = [];
$(document).ready(function() {
    let rgbArr = [];
    for (let i = 0; i < 3; i++) {
        let rgb = {r: 0, g: 0, b: 0, target: "stop[n]"};
        rgb.r = Math.floor(Math.random() * 155) + 6;
        rgb.g = Math.floor(Math.random() * 155) + 6;
        rgb.b = Math.floor(Math.random() * 155) + 6;
        rgb.target = "#stop" + (i + 1).toString();
        // Add the new color to our array
        rgbArr[i] = rgb;
        // Pack the rgb values into a string  0.15 OPACITY
        colors[i] = packRGBA(rgbArr[i].r, rgbArr[i].g, rgbArr[i].b, 0.15);
        // Update each gradient stop
        $(rgbArr[i].target).attr("stop-color", colors[i]);
    }
    // Get a fourth (darker) color
    let color = {r: 0, g: 0, b: 0};
    color.r = Math.min.apply(Math, [rgbArr[0].r, rgbArr[1].r, rgbArr[2].r]);
    color.g = Math.min.apply(Math, [rgbArr[0].g, rgbArr[1].g, rgbArr[2].g]);
    color.b = Math.min.apply(Math, [rgbArr[0].b, rgbArr[1].b, rgbArr[2].b]);
    rgbArr[3] = color;
    // Set thumbnail to dark color 0.15 OPACITY
    colors[3] = packRGBA(rgbArr[3].r, rgbArr[3].g, rgbArr[3].b, 0.15);
    $(".thumb").css("background-color", colors[3]);
    // Set overlay to dark color FULL OPACITY
    colors[4] = packRGBA(rgbArr[3].r, rgbArr[3].g, rgbArr[3].b, 1);
    $(".overlay").css("background-color", colors[4]);
    // Reveal the lables now to mitigate flash 
    $(".label").css("background-color", "white");     

    // Get a fifth (lightest) color
    let lcolor = {r: 0, g: 0, b: 0};
    lcolor.r = Math.max.apply(Math, [rgbArr[0].r, rgbArr[1].r, rgbArr[2].r]);
    lcolor.g = Math.max.apply(Math, [rgbArr[0].g, rgbArr[1].g, rgbArr[2].g]);
    lcolor.b = Math.max.apply(Math, [rgbArr[0].b, rgbArr[1].b, rgbArr[2].b]);
    rgbArr[4] = lcolor;
    // Set links to light color FULL OPACITY
    colors[5] = packRGBA(rgbArr[4].r, rgbArr[4].g, rgbArr[4].b, 1);
    $(".nav-link").css("color", colors[5]);
    $(".content a").css("color", colors[5]);

    // Get colors for logo hover - colors[6-10]
    for (let i=0; i<5; i++){
        index = i + 6;
        colors[index] = packRGBA(rgbArr[i].r, rgbArr[i].g, rgbArr[i].b, 0.55);
    }
});




// Resize function for about page
function reSize(x) {
    if (x.matches) { // If media query matches
        $('#right').css("display", "none");
        $('#left').removeClass("col-7");
        $('#smpic').removeClass("hidden");
    }
    else {
        $('#right').css("display", "block");
        $('#left').addClass("col-7");
        $('#smpic').addClass("hidden");
    }
}
