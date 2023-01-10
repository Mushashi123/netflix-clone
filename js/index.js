const qnaItems = document.getElementsByClassName("qna-item");

// itterate throught the list of items
// - since the list is html collection , can use for each

let isAnyOpen = false;

for (let i = 0; i < qnaItems.length; i++) {
  let question = qnaItems[i].children[0];
  let answer = qnaItems[i].children[1];

  question.addEventListener("click", (e) => {
    let icon = question.children[1].children[0];

    answer.classList.toggle("hide-answer");

    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-xmark");
      isAnyOpen = true;
    } else if (icon.classList.contains("fa-xmark")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-plus");
      isAnyOpen = false;
    }

    if (isAnyOpen) {
      for (let j = 0; j < qnaItems.length; j++) {
        if (j === i) {
          continue;
        }
        let answer = qnaItems[j].children[1];
        answer.classList.add("hide-answer");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-plus");
      }
    }
  });
}
