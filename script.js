
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const navItems = document.getElementById("navitems");
const navLinks = document.querySelectorAll("#navitems .navitem a");

function openMenu() {
    navItems.style.display = "flex";
    navItems.classList.add("show");
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
}

function closeMenu() {
    navItems.classList.remove("show");
    navItems.style.display = "none";
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
}

hamburger.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});
function resetMenu() {
    if (window.innerWidth > 1080) {
        // Desktop mode
        navItems.style.display = "flex";
        navItems.classList.remove("show");
        hamburger.style.display = "none";
        closeIcon.style.display = "none";
    } else {
        // Mobile mode
        navItems.style.display = "none";
        navItems.classList.remove("show");
        hamburger.style.display = "block";
        closeIcon.style.display = "none";
    }
}

// Run on load
window.addEventListener("load", resetMenu);

// Run on resize
window.addEventListener("resize", resetMenu);



const fabToggle = document.getElementById("fabToggle");
const chatFab = document.getElementById("chat-fab");

fabToggle.addEventListener("click", () => {
    const isOpen = chatFab.classList.toggle("open");
    fabToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// AUTO OPEN AFTER 5 SECONDS
setTimeout(() => {
    chatFab.classList.add("open");
    fabToggle.setAttribute("aria-expanded", "true");
}, 5000);





document.getElementById("enquiryForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    await fetch("https://sheetdb.io/api/v1/lr90qd5m3isns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data })
    });

    alert("Inquiry submitted successfully!");
    form.reset();
});
