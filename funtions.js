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
    console.log('there was small class bro');
    current.classList.remove('small');
} else {
    console.log('there was NOT small class bro');
    current.classList.add('small')
}

var topMenu = document.getElementById("wrapper");
if (topMenu.classList.contains('topShrinked') === true) {
    console.log('topMenu there was small class bro');
    topMenu.classList.remove('topShrinked');
} else {
    console.log('topMenu there was NOT small class bro');
    topMenu.classList.add('topShrinked')
}
                

}
function openPage(x) {
    
    var page;
    switch (x) {
    case 0:
    page = "home.html"
    break;

    case 1:
    page = "produkty.html"
    break;

    case 2:
    page = "sluzby.html"
    break;
    }
    location.href = page;
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
    
    }

    console.log (scrollTo);

    var elmnt = document.getElementById(scrollTo);
    elmnt.scrollIntoView(false);
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
    elmnt.scrollIntoView(false);
}