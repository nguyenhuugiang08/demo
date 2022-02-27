var hoverElement = document.querySelector('.content-title-list__item ');
        hoverElement.addEventListener('mouseover' , (e) => {
            setTimeout(() => {
                e.target.parentElement.classList.add('content-title-list__item--hover');
            }, 2500)
        })

        hoverElement.addEventListener('mouseout', (e) => {
            e.target.parentElement.classList.remove('content-title-list__item--hover');
        })


var scrollElement = document.querySelector('.content-scroll__list')

    scrollElement.addEventListener('scrool', (e) => {
       Object.assign(e.target.style, {
           opacity: '1',
           top: '100%',
           transition: 'all linear 0.3s'
       })
    })

    scrollElement.addEventListener('mouseout', (e) => {
        Object.assign(e.target.style, {
            opacity: '0',
            top: '50%',
            transition: 'all linear 0.3s'
        })
     })