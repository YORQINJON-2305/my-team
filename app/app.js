var elopenModalBtn = document.querySelectorAll(".director__item-btn");

elopenModalBtn.forEach(function(link){
    link.addEventListener("click" , function(evt){
        evt.preventDefault();
        link.classList.toggle("director__item-btn--active")
    })
})