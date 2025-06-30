document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#why-choose-1823 .cs-button');
    const boxContents = document.querySelectorAll('#why-choose-1823 .cs-box-content');

    // Function to show the corresponding box content and hide others
    function showBoxContent(button) {
        const filterValue = button.getAttribute('data-filter');

        boxContents.forEach(box => {
            if (box.getAttribute('data-box') === filterValue) {
                box.classList.remove('cs-hidden');
            } else {
                box.classList.add('cs-hidden');
            }
        });

        buttons.forEach(btn => {
            if (btn === button) {
                btn.classList.add('cs-active');
            } else {
                btn.classList.remove('cs-active');
            }
        });
    }

    // Event listeners for screens below 1024px
    if (window.matchMedia('(max-width: 1024px)').matches) {
        buttons.forEach(button => {
            button.addEventListener('click', () => showBoxContent(button));
        });
    }

    // Event listeners for screens above 1024px
    if (window.matchMedia('(min-width: 1024px)').matches) {
        buttons.forEach(button => {
            button.addEventListener('mouseover', () => showBoxContent(button));
        });
    }
});
   
class GalleryFilter {
    filtersSelector = '.cs-button'
    imagesSelector = '.cs-gallery'
    activeClass = 'cs-active'
    hiddenClass = 'cs-hidden'

    constructor() {
        const $filters = document.querySelectorAll(this.filtersSelector)
        this.$activeFilter = $filters[0]
        this.$images = document.querySelectorAll(this.imagesSelector)

        this.$activeFilter.classList.add(this.activeClass)

        for (const $filter of $filters) {
        $filter.addEventListener('click', () => this.onClick($filter))
        }
    }

    onClick($filter) {
        this.filter($filter.dataset.filter)

        const { activeClass } = this

        this.$activeFilter.classList.remove(activeClass)
        $filter.classList.add(activeClass)

        this.$activeFilter = $filter
    }

    filter(filter) {
        const showAll = filter == 'all'
        const { hiddenClass } = this

        for (const $image of this.$images) {
        const show = showAll || $image.dataset.category == filter
        $image.classList.toggle(hiddenClass, !show)
        }
    }
    }

new GalleryFilter()
                            