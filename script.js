const sidebar = document.querySelector(".sideBar");

document
.querySelector("#menu-open-button")
.addEventListener("click",()=>{

    sidebar.classList.add("active");

});

document
.querySelector("#menu-close-button")
.addEventListener("click",()=>{

    sidebar.classList.remove("active");

});