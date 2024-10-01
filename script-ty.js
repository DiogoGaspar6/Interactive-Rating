let actualRating = localStorage.getItem('actualRating') || 0;

function back(){
  window.location.href = "index.html";
}

window.onload = function (){
  document.getElementById('msg').innerHTML = `You selected ${actualRating} out of 5`
}