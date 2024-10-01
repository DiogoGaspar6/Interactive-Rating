let actualRating = localStorage.getItem('actualRating') || 0;

function rating(n) {
  const ratings = document.querySelectorAll(".rating");

  if (actualRating === n) {
    ratings[n - 1].classList.remove("active");
    actualRating = 0;
  } else {
    actualRating = n;
    for (let i = 1; i <= ratings.length; i++) {
      if (i === n) {
        ratings[i - 1].classList.add("active");
      } else {
        ratings[i - 1].classList.remove("active");
      }
    }
  }
  console.log('Actual rating: ' + actualRating);
  localStorage.setItem('actualRating', actualRating);
}

function submit() {
  if (actualRating === 0) {
    alert("[ERROR] You need to select one rating score!");
  } else {
    window.location.href = "thankyou.html";
  }
}