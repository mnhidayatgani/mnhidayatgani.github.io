// Fungsi untuk menu hamburger
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fungsi untuk menandai link navigasi yang aktif saat scroll
const sections = document.querySelectorAll('section, main'); // Memilih main juga
const navLi = document.querySelectorAll('nav .nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Penyesuaian offset agar lebih akurat saat section berada di atas
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        // Memastikan href cocok dengan id section saat ini
        if (a.getAttribute('href') == '#' + current) {
            a.classList.add('active');
        }
    });
});

AOS.init({
    duration: 800, // Durasi animasi dalam milidetik
    offset: 50, // Memicu animasi sedikit lebih awal
});

// ... kode Anda yang sudah ada untuk hamburger, scroll, dan AOS ...

// Fungsi untuk animasi mengetik di Hero Section
// Ganti kode JavaScript Anda dengan yang ini
document.addEventListener('DOMContentLoaded', function () {
    new TypeIt("#nama-baris-1", {
        speed: 100,
        startDelay: 900,
        cursor: false,
        afterComplete: function (instance) {
            instance.destroy(); // Hapus instance setelah selesai
            // Mulai animasi untuk baris kedua
            new TypeIt("#nama-baris-2", {
                speed: 120,
                cursor: false,
                breakLines: false,
                afterComplete: function (instance) {
                    instance.destroy(); // Hapus instance setelah selesai
                    // Mulai animasi untuk profesi
                    new TypeIt("#profesi", {
                       speed: 70, // Mungkin sedikit lebih cepat untuk teks yang panjang
                        cursor: false, // Tampilkan kursor di akhir untuk efek
                        breakLines: false,
                        afterComplete: function (instance) {
                            instance.destroy();
                        }
                    })
                    .type("CERTIFIED EXCAVATOR HEAVY EQUIPMENT OPERATOR")
                    .go(); // <--- INI BAGIAN YANG DIPERBAIKI (ditambahkan .go())
                }
            })
            .type("NURHIDAYAT GANI")
            .go();
        }
    })
    .type("MUHAMMAD", {delay: 300})
    .go();
});

