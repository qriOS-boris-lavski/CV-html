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

class GithubApi {
  constructor(token, username) {
    this.token = token;
    this.username = username;
    this.baseUrl = `https://api.github.com/users/${this.username}/repos`;
  }

async getRepos() {
    const response = await fetch(this.baseUrl, {
      headers: {
        'Authorization': `Token ${this.token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch repos: ${response.status}`);
    }

    const repos = await response.json();
    return repos;
  }
}

const token = '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';
const username = 'qriOS-boris-lavski';

const api = new GithubApi(token, username);

async function showRepos() {
  const reposData = await api.getRepos();

  reposData.forEach((repo) => {
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
      p.style.fontStyle = 'italic';
      p.style.fontSize = '15px';
      item.appendChild(p);
    }
  });
}

window.onload = function () {
  showRepos();
};
