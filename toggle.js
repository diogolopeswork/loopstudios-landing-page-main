// $(function() {
//     $(document).on("click", "#hamburger", function(e) {
//         $("#hamburger").hide();
//         $("#c-hamburger").show();
//         $("#nav").addClass("active");
//         $("active").show();
//     }); 

//     $(document).on("click", "#c-hamburger", function(e) {
//         $("#hamburger").show();
//         $("#c-hamburger").hide();
//         $("#nav").removeClass("active");
//         $("active").hide();
//     });
// });

const Btnhamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const close = document.getElementById('close');

Btnhamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    Btnhamburger.classList.toggle('close');
})
