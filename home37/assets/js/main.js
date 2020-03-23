let body = document.querySelector('body');
let currentClick = 0;
let transform = 300;
let currentTransform = 0;
let leftArray = document.querySelector('.fa-angle-left')
let rightArray = document.querySelector('.fa-angle-right')

const current = document.getElementsByClassName('examples__container')[0]

body.addEventListener('click', function(event){
    if(event.target.classList.contains('fa-angle-left')){
        currentClick -= 1;
        rightArray.style.display = 'flex';
    }

    if(event.target.classList.contains('fa-angle-right')){
        currentClick += 1;
        leftArray.style.display = 'flex';
        rightArray.style.color = 'gray';
    }

    if(event.target.classList.contains('about__us')){
        // window.scrollBy(0,800);
        
    }

    currentTransform = transform * currentClick;
    
    current.style.left = -currentTransform + 'px'

    if(currentClick === 7){
        rightArray.style.display = 'none';
    }

    if(currentClick === 0){
        leftArray.style.display = 'none';
        rightArray.style.color = 'black';
    }
})