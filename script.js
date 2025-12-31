// Sidebar toggle for mobile
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        const current = sidebar.style.transform;
        sidebar.style.transform = current === "translateX(0px)" ? "translateX(-220px)" : "translateX(0px)";
    }
});
