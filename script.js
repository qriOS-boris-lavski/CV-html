const imgCV = document.querySelector('img');

imgCV.addEventListener('click', () => {
    imgCV.classList.toggle("img_cv")
});

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

async function showRepos() {
    const repos = await fetch('https://api.github.com/users/qriOS-boris-lavski/repos');
    const reposData = await repos.json();

    reposData.forEach(repo => {
        const items = document.querySelector('.my-projects');
        let item = document.createElement('li');
        items.appendChild(item);

        let a = document.createElement('a');
        a.href = repo.html_url;
        a.target = '_blank';
        a.innerHTML = repo.full_name;
        item.appendChild(a);
        
        if (repo.description) {
            let p = document.createElement('p');
            p.innerHTML = repo.description;
            item.appendChild(p);
        }
    })
}
window.onload = function () {
    showRepos();
};