function toggleItem(elem) {
for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {
    var current = this;
    for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
        elem[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
        current.classList.remove('active');
        } else {
        current.classList.add('active')
        }
    }
    e.preventDefault();
    });
};
}
toggleItem(document.querySelectorAll('.link'));

function myZoom() {
var current = document.getElementById("topNav");
if (current.classList.contains('small') === true) {
    current.classList.remove('small');
} else {
    current.classList.add('small')
}

var topMenu = document.getElementById("wrapper");
if (topMenu.classList.contains('topShrinked') === true) {
    topMenu.classList.remove('topShrinked');
} else {
    topMenu.classList.add('topShrinked')
}
                

}
function openPage(x) {
    
    var page;
    switch (x) {
    case 0:
    page = "index.html"
    break;

    case 1:
    page = "produkty.html"
    break;

    case 2:
    page = "sluzby.html"
    break;

    case 3:
    page = "kontakty.html"
    break;
    
    case 4:
    page = "ospolecnosti.html"
    break;

    }

    location.href = page;
}

function openPageFromIndex(z) {
    var goTo;
    switch (z) {
        case 0:
            goTo = "#01predprojektovapriprava";
            break;
            
            case 1:
            goTo = "#02projektovani";
            break;
        
            case 2:
            goTo = "#03realizacestaveb";
            break;
        
            case 3:
            goTo = "#04stavebnidozory";
            break;
    }
    var page = "sluzby.html"
    location.href = page + goTo;
}

function myScroll(x) {
    
    var scrollTo;
    switch (x) {
    
    case 0:
    scrollTo = "01predprojektovapriprava";
    break;
    
    case 1:
    scrollTo = "02projektovani";
    break;

    case 2:
    scrollTo = "03realizacestaveb";
    break;

    case 3:
    scrollTo = "04stavebnidozory";
    break;

    case 4:
    scrollTo = "44profidryfix";
    break;

    case 5:
    scrollTo = "30profidryfix";
    break;

    case 6:
    scrollTo = "115profidryfix";
    break;

    case 7:
    scrollTo = "40bed";
    break;
    
    }

    console.log (scrollTo);

    var elmnt = document.getElementById(scrollTo);
    elmnt.scrollIntoView(true);
}