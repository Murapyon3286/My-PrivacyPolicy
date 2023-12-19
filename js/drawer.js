"use strict";
// const drawer = document.querySelectorAll(".icon-block");

// function toggle() {
//   const content = this.nextElementSibling;
//   this.classList.toggle("is-active");
//   content.classList.toggle("is-open");
// }

// for (let i = 0; i < drawer.length; i++) {
//   drawer[i].addEventListener("click", toggle)
// }

// 以下jQuery
$(".icon-block").on("click", function () {
  $(this).next().slideToggle();
});

// 参考にしたサイト
// https://webukatu.com/wordpress/blog/6087/