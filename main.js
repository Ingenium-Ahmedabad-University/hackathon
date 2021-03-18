//counter //fuck jquery
finaldate = new Date("26 March 2021 17:00:00");
setInterval(() => {
    let timeleft = finaldate - new Date();
    d = document.getElementById("days");
    h = document.getElementById("hours");
    m = document.getElementById("mins");
    s = document.getElementById("secs");
    d.innerHTML = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    h.innerHTML = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    m.innerHTML = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    s.innerHTML = Math.floor((timeleft % (1000 * 60)) / 1000);
}, 1000);

 // timeline
 document.getElementById("26th").addEventListener("click", () => {
     document.getElementById("27th").classList.remove("current-day");
     document.getElementById("26th").classList.add("current-day");
     document.getElementById("28th").classList.remove("current-day");

     document.getElementById("26th list").classList.remove("hidden");
     document.getElementById("27th list").classList.add("hidden");
     document.getElementById("28th list").classList.add("hidden");
 });

 document.getElementById("27th").addEventListener("click", () => {
     document.getElementById("27th").classList.add("current-day");
     document.getElementById("26th").classList.remove("current-day");
     document.getElementById("28th").classList.remove("current-day");

     document.getElementById("27th list").classList.remove("hidden");
     document.getElementById("26th list").classList.add("hidden");
     document.getElementById("28th list").classList.add("hidden");
 });

 document.getElementById("28th").addEventListener("click", () => {
    document.getElementById("28th").classList.add("current-day");
    document.getElementById("26th").classList.remove("current-day");
    document.getElementById("27th").classList.remove("current-day");

    document.getElementById("28th list").classList.remove("hidden");
    document.getElementById("26th list").classList.add("hidden");
    document.getElementById("27th list").classList.add("hidden");
});

// navigation
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("nav-list").classList.add("nav-hide");
});
document.getElementById("menu-icon").addEventListener("click", () => {
    document.getElementById("nav-list").classList.remove("nav-hide");
});
let ll = document.getElementsByClassName("link");

for (let link of ll) {
    link.addEventListener("click", () => {
        document.getElementById("nav-list").classList.add("nav-hide");
    });
}
//faq

buttons = document.getElementsByClassName("add");
for (let b of buttons) {
    b.addEventListener("click", (e) => {
        b.nextElementSibling.classList.toggle("active");
    });
}
// //devfolio
// document.addEventListener('DOMContentLoaded', function () {
//     let devfolioOptions = {
//         buttonSelector: '#devfolio-apply-now',
//         key: 'myhackathonkey',
//     }

//     let script = document.createElement('script');
//     script.src = "https://apply.devfolio.co";
//     document.head.append(script);

//     script.onload = function () {
//         new Devfolio(devfolioOptions);
//     }

//     script.onerror = function () {
//         document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
//             window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
//         });
//     }
// });
