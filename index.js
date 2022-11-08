let pagesBtn = document.querySelectorAll('[data-p]')
let pages = document.querySelectorAll('.content')



pagesBtn.forEach(btn => {
    btn.onclick = () => {
        let pageId = btn.getAttribute('data-p')

        pages.forEach(p => p.classList.remove('activePage'))

        pages.forEach(p => p.id === pageId ? p.classList.add('activePage') : "")
    }
});