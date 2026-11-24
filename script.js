// Membuat popup gambar
const modal = document.createElement("div");
modal.classList.add("image-modal");

modal.innerHTML = `
    <span class="modal-close">&times;</span>
    <img src="" alt="Preview">
`;

document.body.appendChild(modal);

const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".modal-close");

// Mengambil gambar galeri dan karakter
const images = document.querySelectorAll(
    ".gallery-container img, .character-card img"
);

// Ketika gambar diklik
images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImage.src = image.src;
        modal.classList.add("active");
    });
});

// Menutup popup
closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

// Menutup popup dengan tombol Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});


// Animasi ketika halaman di-scroll
const sections = document.querySelectorAll(
    ".gallery, .characters"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});
console.log("JAVASCRIPT BERHASIL!");

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function () {

    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "Ⅱ Pause Music";
        } catch (error) {
            console.error("Gagal memutar musik:", error);
            alert("Musik gagal diputar. Periksa file MP3!");
        }
    } else {
        music.pause();
        musicButton.textContent = "♪ Play Music";
    }

});


// Navbar berubah ketika halaman di-scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Tombol kembali ke atas
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// LOADING SCREEN
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1800);
});


// SLIDESHOW GALLERY
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showNextSlide() {
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
    setInterval(showNextSlide, 4000);
}


// CHARACTER DETAIL POPUP
const characterCards = document.querySelectorAll(".character-card");
const characterModal = document.getElementById("characterModal");

const detailImage = document.getElementById("detailImage");
const detailName = document.getElementById("detailName");
const detailDescription = document.getElementById("detailDescription");

const closeCharacter = document.getElementById("closeCharacter");

characterCards.forEach((card) => {
    card.addEventListener("click", () => {
        detailImage.src = card.querySelector("img").src;
        detailName.textContent = card.querySelector("h3").textContent;
        detailDescription.textContent = card.querySelector("p").textContent;

        characterModal.classList.add("active");
    });
});

closeCharacter.addEventListener("click", () => {
    characterModal.classList.remove("active");
});

characterModal.addEventListener("click", (event) => {
    if (event.target === characterModal) {
        characterModal.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        characterModal.classList.remove("active");
    }
});


// SEARCH CHARACTER
const searchInput = document.getElementById("searchCharacter");

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    characterCards.forEach((card) => {
        const name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(keyword)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});





