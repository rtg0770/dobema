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

    case 5:
    page = "galerie.html"
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

    case 9:
    scrollTo = "kbet";
    break;

    case 11:
    scrollTo = "litepodlahy";
    break;

    case 31:
    scrollTo = "g01";
    break;
    
    case 32:
    scrollTo = "g02";
    break;

    case 33:
    scrollTo = "g03";
    break;

    case 34:
    scrollTo = "g04";
    break;

    case 35:
    scrollTo = "g05";
    break;

    case 36:
    scrollTo = "g06";
    break;

    case 37:
    scrollTo = "g07";
    break;

    case 38:
    scrollTo = "g08";
    break;

    case 39:
    scrollTo = "g09";
    break;

    case 40:
    scrollTo = "g10";
    break;

    case 41:
    scrollTo = "g11";
    break;
    }

    console.log (scrollTo);

    var elmnt = document.getElementById(scrollTo);
    elmnt.scrollIntoView(true);
}

function toggleMenu() {
var links = document.getElementById("mainmenu");
if (links.classList.contains('hiddn') === true) {
    links.classList.remove('hiddn');
} else {
    links.classList.add('hiddn')
}
}