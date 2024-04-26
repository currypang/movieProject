const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzM1ZmE2ZmQ2MTE3M2I3Nzk2ZmEyNzUyNTNmNDE4NyIsInN1YiI6IjY2MmI0YTc4OWFjNTM1MDExZDhmMmRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vk4yeQ8AiQHmqX_sadQavDK7PIaoriDP50jL6m2DQHM'
  }
};

// tmdb 데이터 가져오기
// jsonData.results - 영화모음[배열] // jsonData.results[1].poster_path - 포스터, jsonData.results[1].original_title - 제목
// jsonData.results[1].overview - 내용, jsonData.results[1].vote_average - 평점
async function getdata() {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  const jsonData = await response.json();
  for (let i = 0; i < jsonData.results.length; i++) {
    let poster = `https://image.tmdb.org/t/p/w500${jsonData.results[i].poster_path}`;
    let title = jsonData.results[i].original_title;
    let content = jsonData.results[i].overview;
    let average = jsonData.results[i].vote_average

    let addCard = document.createElement("div");
    let addImg = document.createElement("img");
    let addTitle = document.createElement("h4");
    let addContent = document.createElement("p");
    let addAverage = document.createElement("p");

    addCard.appendChild(addImg);
    addCard.appendChild(addTitle);
    addCard.appendChild(addContent);
    addCard.appendChild(addAverage);

    addCard.setAttribute("class", "card");
    addImg.setAttribute("id", "img");
    addTitle.setAttribute("id", "title");
    addContent.setAttribute("id", "content");
    addAverage.setAttribute("id", "average");

    document.querySelector(".flex-container").append(addCard);

    addImg.src = poster;
    addTitle.textContent = title;
    addContent.textContent = content;
    addAverage.textContent = average;
  }
}

getdata();
// function makeCard () {

// }
