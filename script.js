const imgCV = document.querySelector('img');

imgCV.addEventListener('click', () => {
    imgCV.classList.toggle("img_cv")
});

// const navBtn = document.querySelector('.nav');

document.addEventListener('keydown', (event) => {
    let key = event.key.toLowerCase();
    let title = '.nav-'+ key;
    let scrollTo = document.querySelector(title);
    if(scrollTo){
        scrollTo.scrollIntoView(
            { behavior: 'smooth' }
        )
    }
})