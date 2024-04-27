const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzM1ZmE2ZmQ2MTE3M2I3Nzk2ZmEyNzUyNTNmNDE4NyIsInN1YiI6IjY2MmI0YTc4OWFjNTM1MDExZDhmMmRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vk4yeQ8AiQHmqX_sadQavDK7PIaoriDP50jL6m2DQHM'
  }
};

// tmdb 데이터 가져오기
async function getdata() {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  const jsonData = await response.json(); // jsonData.results - 영화모음[배열]
  // 영화모음(배열)을 순회하며 각 영화의 정보로 카드 만들기
  for (let i = 0; i < jsonData.results.length; i++) {
    // 각 영화의 정보 지정하기
    let poster = `https://image.tmdb.org/t/p/w500${jsonData.results[i].poster_path}`;
    let title = jsonData.results[i].original_title;
    let content = jsonData.results[i].overview;
    let average = jsonData.results[i].vote_average
    // 영화 카드 만들기
    let addCard = document.createElement("div");
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
}
// 데이터 불러오기 실행
getdata();

// 검색 버튼 이벤트
const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  // event.preventDefault();
  let text = document.getElementById("input").value;
  


});
