function search() {
  let input = document.getElementById("search");
  let content = document.getElementById("content");
  let article = content.getElementsByTagName("article");
  filter = input.value.toUpperCase();

  if (filter == "") {
    for (i = 0; i < article.length; i++) {
      article[i].style.display = "";
      if (i == 0) {
        article[i].classList.add("first");
        article[i].classList.add("top");
      } else {
        article[i].classList.remove("first");
      }
    }
  } else {
    for (i = 0; i < article.length; i++) {
      a = article[i].getElementsByTagName("h2")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        article[i].style.display = "";
        article[i].classList.add("first");
        article[i].classList.remove("top");
      } else {
        article[i].style.display = "none";
      }
    }
  }
}

let backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 400) {
    backToTop.classList.add("show");

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  } else {
    backToTop.classList.remove("show");
  }
});
