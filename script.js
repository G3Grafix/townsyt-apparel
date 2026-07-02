function setupSidebar() {
    const sidebar = document.querySelector(".sideBar");
    const openBtn = document.querySelector("#menu-open-button");
    const closeBtn = document.querySelector("#menu-close-button");

    if (!sidebar || !openBtn || !closeBtn) {
        return;
    }

    openBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
}

const navbarSlot = document.getElementById("navbar");
const sidebarSlot = document.getElementById("sideBar");
const footerSlot = document.getElementById("footer");

if (navbarSlot) {
    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            navbarSlot.innerHTML = data;
            setupSidebar();
        });
}

if (sidebarSlot) {
    fetch("sideBar.html")
        .then(res => res.text())
        .then(data => {
            sidebarSlot.innerHTML = data;
            setupSidebar();
        });
}

if (footerSlot) {
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            footerSlot.innerHTML = data;
        });
}

setupSidebar();
