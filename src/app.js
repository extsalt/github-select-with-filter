import "@github/details-menu-element";
import "@github/filter-input-element";


const filter = document.querySelector('filter-input');

console.log(filter);

filter.addEventListener('filter-input-start', (e) => {
    console.log(e)
});

filter.addEventListener('filter-input-updated', (e) => {
    console.log(e)
});