export { cardList, fetchMovie };

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzM1ZmE2ZmQ2MTE3M2I3Nzk2ZmEyNzUyNTNmNDE4NyIsInN1YiI6IjY2MmI0YTc4OWFjNTM1MDExZDhmMmRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vk4yeQ8AiQHmqX_sadQavDK7PIaoriDP50jL6m2DQHM",
  },
};

// tmdb 데이터 가져오기
async function fetchMovie() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  const jsonData = await response.json();
  return jsonData.results; // jsonData.results - 영화모음[배열]
}
// console.log(await fetchMovie());
// console.log(fetchMovie());

let cards = await fetchMovie();

function cardList() {
  const list = document.querySelector(".flex-container");
  list.innerHTML = cards
    .map(
      (movie) => `
    <li class="card" id="${movie.id}">
      <img id="img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
      <h4 id="title">${movie.title}</h4>
      <p id="content">${movie.overview}</p>
      <p id="average">${movie.vote_average}</p>
    </li>
  `
    )
    .join(""); // 배열의 모든 요소를 문자열로 연결하여 반환

  // 카드 눌렀을 때 영화 id 경고창으로 띄우기
  alertCard(cards);
}
function alertCard(jsonData) {
  const card = document.getElementsByClassName("card");
  const arrc = Object.keys(card).map((el) => card[el]);
  arrc.forEach((element, index) => {
    const movieID = cards[index].id;
    element.addEventListener("click", (element) => {
      // html 말고 자바스크립트에서 작동하게끔 작성
      window.location.href = `../sub_page.html?value=${movieID}`;
    });
  });
}

// // tmdb 데이터 가져오기
// async function fetchMovie() {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//     options
//   );
//   const jsonData = await response.json(); // jsonData.results - 영화모음[배열]
//   // 영화모음(배열)을 순회하며 각 영화의 정보로 카드 만들어 ul(class = flex-container)에 붙이기
//   const list = document.querySelector(".flex-container");
//   list.innerHTML = jsonData.results
//     .map(
//       (movie) => `
//     <li class="card" id="${movie.id}">
//       <img id="img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
//       <h4 id="title">${movie.title}</h4>
//       <p id="content">${movie.overview}</p>
//       <p id="average">${movie.vote_average}</p>
//     </li>
//   `
//     )
//     .join(""); // 배열의 모든 요소를 문자열로 연결하여 반환

//   // 카드 눌렀을 때 영화 id 경고창으로 띄우기
//   alertCard(jsonData);
// }
