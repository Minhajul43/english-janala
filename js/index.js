const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json => displaylesson(json));
}

const displaylesson = () => {
  const levelContainer = document.getElementById(level - container);
  levelContainer.innerHTML = "";
}