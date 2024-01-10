$(document).ready(function () {
  $(".pushable").click(function () {
    $(".myimagee").animate({
      height: "toggle",
    });
  });
});

// $(document).ready(function () {
//   $(".pushable").click(function () {
//     $(".myimagee").animate({
//       height: "toggle",
//     });
//   });

//   $(".next-btn").click(function () {
//     $(".swiper").animate(
//       {
//         scrollLeft: "+=610",
//       },
//       "slow"
//     );
//   });

//   $(".prev-btn").click(function () {
//     $(".swiper").animate(
//       {
//         scrollLeft: "-=610",
//       },
//       "slow"
//     );
//   });
// });

// // var swiper = document.querySelector(".swiper");

// // var myImage = document.querySelector(".myimagee");

// // var prevBtn = document.querySelector(".prev-btn");
// // var nextBtn = document.querySelector(".next-btn");
// // console.log("prevBtn", prevBtn);
// // console.log("nextBtn", nextBtn);
// // nextBtn.addEventListener("click", () => {
// //   swiper.scrollTo({
// //     left: 610,
// //     behavior: "smooth",
// //   });
// // });

// // prevBtn.addEventListener("click", () => {
// //   swiper.scrollTo({
// //     left: -610,
// //     behavior: "smooth",
// //   });
// // });

$(document).ready(function () {
  $(".next-btn").click(function () {
    $(".swiper").animate(
      {
        scrollLeft: "+=610",
      },
      "slow"
    );
  });

  $(".prev-btn").click(function () {
    $(".swiper").animate(
      {
        scrollLeft: "-=610",
      },
      "slow"
    );
  });
});

$(document).ready(function () {
  $("#trigger").click(function () {
    $("#description").slideToggle();
  });
});


