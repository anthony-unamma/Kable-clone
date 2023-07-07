
//Creating a sticky effect on the comparison header
const stickyElement = document.querySelector('.compare-head');
const endCompareSticky = document.querySelector('.comp-title.sec.last').offsetTop;
let stickyElementOffsetTop = stickyElement.offsetTop;

//adding event listener
window.addEventListener('scroll', function() {
    if (window.scrollY >= stickyElementOffsetTop) {
        stickyElement.classList.add('compare-head-sticky');
    }
    else if (window.scrollY >= endCompareSticky) {
        stickyElement.classList.remove('compare-head-sticky');
    }
})



//Toggling the company dropdown link
const companyDropdownLink = document.querySelector('div.navlink-text');
let companyDropdown = document.querySelector('.company-dropdown-list')

companyDropdownLink.addEventListener('click', function() {
    companyDropdown.classList.toggle('show-dropdown')
    companyDropdown.classList.toggle('hide-dropdown')
})


