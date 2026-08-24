// ==========================================
// 1. IP ADRESİ KOPYALAMA SİSTEMİ
// ==========================================
function copyIP(ipAddress) {
    navigator.clipboard.writeText(ipAddress).then(() => {
        const copyBadge = document.getElementById('copy-badge');
        const ipText = document.getElementById('ip-text');
        
        // Orijinal metinleri sakla
        const originalBadgeText = copyBadge.innerText;
        
        // Kullanıcıya bildirim ver
        copyBadge.innerText = "✓ Kopyalandı!";
        copyBadge.style.color = "#FF55FF";
        
        // 2 Saniye sonra eski haline getir
        setTimeout(() => {
            copyBadge.innerText = originalBadgeText;
            copyBadge.style.color = "#a0a0ab";
        }, 2000);
    }).catch(err => {
        console.error('Kopyalama hatası:', err);
    });
}

// ==========================================
// 2. MOBİL HAMBURGER MENÜ
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.getElementById("mobile-toggle");
    const navLinks = document.getElementById("nav-links");

    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // ==========================================
    // 3. FADE-IN ON SCROLL (AŞAĞI KAYDIRDIKÇA BELİRME)
    // ==========================================
    const fadeElements = document.querySelectorAll(".fade-in");

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target); // Tekrar tetiklenmemesi için takibi bırak
            }
        });
    }, {
        threshold: 0.15 // Öğenin %15'i göründüğünde tetiklenir
    });

    fadeElements.forEach(element => {
        appearanceObserver.observe(element);
    });
});
