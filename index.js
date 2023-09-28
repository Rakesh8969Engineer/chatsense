const talk_btn = document.getElementById("talk-to-sales-btn-modal");
const modal = document.getElementById("modal");
talk_btn.onclick = function () {
  modal.style.display = "block";
  modal.style.setProperty("position", "absolute", "important");
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.display = "flex";
  modal.style.transform = "translate(-50%, -50%)";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
const crossicon = document.getElementById("cross");
crossicon.onclick=function(){
modal.style.display="none"
}
