const searchInputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-btn');
const userContainerEl = document.querySelector('.user-container');

searchBtnEl.addEventListener('click', async function () {
  console.log('click');
  const userName = searchInputEl.value;

  if (userName) {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const user = await res.json();

    console.log(user);

    userContainerEl.innerHTML = `
                                <div class="img-box">
                                  <img src="${user.avatar_url}" alt="user img" />
                                </div>

                                <div class="user-details">
                                  <div class="detail">
                                    <p>Name: ${user.name}</p>
                                  </div>
                                  <div class="detail">
                                    <p>Prtfolio: <a href="${user.html_url}">Portfolio</a></p>
                                  </div>
                                  <div class="detail">
                                    <p>Location: ${user.location}</p>
                                  </div>
                                  <div class="detail">
                                    <p>Public Repos: ${user.public_repos}</p>
                                  </div>
                                  <div class="detail">
                                    <p>Followers: ${user.followers}</p>
                                  </div>
                                  <div class="detail">
                                    <p>Bio: ${user.bio}</p>
                                  </div>
                                </div>`;
  }
});
