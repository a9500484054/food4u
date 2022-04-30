document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.food4u-burger').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function() {

            let on = document.querySelector('.food4u-menu')
            on.classList.toggle('on')

            let btnClose = document.querySelector('.food4u-burger__elem-btn')
            btnClose.classList.toggle('food4u-burger__elem-btn--close')

        
        })
    })
})