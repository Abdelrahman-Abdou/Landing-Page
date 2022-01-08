//Global variables
const sections = document.querySelectorAll('section');
const List = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();
const numberOfList = sections.length;


//creating dynamic navigation menu
function NavMenu() {
    sections.forEach((element) => {

        const secName = element.getAttribute("data-nav");
        const secLink = document.createElement('a');
        secLink.className = "menu__link";
        const newListItem = document.createElement("li");
        const text = document.createTextNode(secName);

        secLink.appendChild(text);
        newListItem.appendChild(secLink);
        fragment.appendChild(newListItem);
        List.appendChild(fragment);

        newListItem.addEventListener("click", function() {
            element.scrollIntoView();
        });

    });
}

//section in view port
function secInViewPort(section) {
    let sectionPos = section.getBoundingClientRect();
    return (sectionPos.top >= 10);
}

//different style for section in view port
function ActiveClass(section) {
    for (section of sections) {
        if (secInViewPort(section)) {

            section.style.background = '#6565a2';

        } else {
            section.style.background = '#474771 ';
        }
    }
}

document.addEventListener('scroll', ActiveClass);

NavMenu();
















/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active