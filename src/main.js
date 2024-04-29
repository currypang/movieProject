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
  const jsonData = await response.json(); // jsonData.results - 영화모음[배열]
  // 영화모음(배열)을 순회하며 각 영화의 정보로 카드 만들기
  // console.log(jsonData)
  jsonData.results.forEach((movie) => {
    createCard(movie);
  });
  alertCard(jsonData);
}
// 카드 눌렀을 때 영화 id 경고창으로 띄우기
function alertCard(jsonData) {
  const card = document.getElementsByClassName("card");
  let arrc = Object.keys(card).map((el) => card[el]);
  arrc.forEach((element, index) => {
    let movieID = jsonData.results[index].id;
    element.addEventListener("click", (element) => {
      alert(`영화 id : ${movieID}`);
    });
  });
}

// 카드 생성 로직
function createCard(movie) {
  let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  let title = movie.original_title;
  let content = movie.overview;
  let average = movie.vote_average;
  let id = movie.id;
  // 영화 카드 만들기
  let addCard = document.createElement("li");
  let addImg = document.createElement("img");
  let addTitle = document.createElement("h4");
  let addContent = document.createElement("p");
  let addAverage = document.createElement("p");
  // 부모-자식 관계 설정
  addCard.appendChild(addImg);
  addCard.appendChild(addTitle);
  addCard.appendChild(addContent);
  addCard.appendChild(addAverage);
  // 노드 속성 설정
  addCard.setAttribute("class", "card");
  addCard.setAttribute("id", `${id}`);
  addImg.setAttribute("id", "img");
  addTitle.setAttribute("id", "title");
  addContent.setAttribute("id", "content");
  addAverage.setAttribute("id", "average");
  // 카드 붙여주기
  document.querySelector(".flex-container").append(addCard);
  // 영화 정보 채우기
  addImg.src = poster;
  addTitle.textContent = title;
  addContent.textContent = content;
  addAverage.textContent = average;
}

// 데이터 불러오기 실행
fetchMovie();
// 새로고침 시 커서 인풋창에 두기
const input = document.getElementById("input");
function cursor() {
  input.focus();
}
cursor();
// 엔터키 눌렀을때 검색버튼 클릭
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

// 검색 버튼 이벤트
const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  // event.preventDefault(); - form 태그에서 버튼 타입이 submit이면 이벤트 발생시 새로고침 -> 버튼에 type= "button" 부여 or / form대신 div 사용
  // 입력창의 밸류 값 - 대소문자 상관없이 서치하기 위해 대문자로 변환
  let text = document.getElementById("input").value.toUpperCase();
  // 영화카드 목록
  let movieCard = document.getElementsByTagName("li");
  // 배열메서드 사용위해 유사배열을 배열로 변환
  // const arrayCard = Array.from(movieCard); // map 메서드 대신 사용 가능
  const arrayCard = Object.keys(movieCard).map((el) => movieCard[el]);

  // foreach 매서드를 사용해 카드 탐색
  arrayCard.forEach((element, index) => {
    // movtTitle(영화 제목) 대문자로 변환
    let movTitle = element.children[1].innerText.toUpperCase();
    // 검색창의 값과 영화카드의 제목이 같지 않으면 css를 통해 카드를 숨기는 id를 부여
    if (!movTitle.includes(text)) {
      movieCard[index].id = "none";
      // 검색창의 값이 제목에 포함되었다면 id부여를 통해 숨김해제 - 재검색때 필요
    } else {
      movieCard[index].id = "some";
    }
  });
});
