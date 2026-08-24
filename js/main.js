const serverIP = "BreadNetwork.aternos.me";

function copyIP() {
    navigator.clipboard.writeText(serverIP);
    alert("Sunucu IP adresi kopyalandı: " + serverIP);
}

async function fetchServerStatus() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();

        const statusText = document.getElementById("server-status");
        const playerCount = document.getElementById("player-count");
        const statusDot = document.getElementById("status-dot");

        if (data && data.online) {
            if (statusText) {
                statusText.innerText = "AÇIK";
                statusText.style.color = "#2ed573";
            }
            if (statusDot) statusDot.style.backgroundColor = "#2ed573";
            if (playerCount) playerCount.innerText = `${data.players.online} / ${data.players.max}`;
        } else {
            if (statusText) {
                statusText.innerText = "KAPALI";
                statusText.style.color = "#ff4757";
            }
            if (statusDot) statusDot.style.backgroundColor = "#ff4757";
            if (playerCount) playerCount.innerText = "0 / 0";
        }
    } catch (error) {
        if (document.getElementById("server-status")) {
            document.getElementById("server-status").innerText = "Bilinmiyor";
        }
    }
}

fetchServerStatus();

// Sayfalar arası yumuşak geçiş efektleri
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = this.getAttribute('href');
            if (target && target.startsWith('/BreadNetwork')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    window.location.href = target;
                }, 300);
            }
        });
    });
});const serverIP = "BreadNetwork.aternos.me";

function copyIP() {
    navigator.clipboard.writeText(serverIP);
    alert("Sunucu IP adresi kopyalandı: " + serverIP);
}

async function fetchServerStatus() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();

        const statusText = document.getElementById("server-status");
        const playerCount = document.getElementById("player-count");
        const statusDot = document.getElementById("status-dot");

        if (data && data.online) {
            if (statusText) {
                statusText.innerText = "AÇIK";
                statusText.style.color = "#2ed573";
            }
            if (statusDot) statusDot.style.backgroundColor = "#2ed573";
            if (playerCount) playerCount.innerText = `${data.players.online} / ${data.players.max}`;
        } else {
            if (statusText) {
                statusText.innerText = "KAPALI";
                statusText.style.color = "#ff4757";
            }
            if (statusDot) statusDot.style.backgroundColor = "#ff4757";
            if (playerCount) playerCount.innerText = "0 / 0";
        }
    } catch (error) {
        if (document.getElementById("server-status")) {
            document.getElementById("server-status").innerText = "Bilinmiyor";
        }
    }
}

fetchServerStatus();

// Sayfalar arası yumuşak geçiş efektleri
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = this.getAttribute('href');
            if (target && target.startsWith('/BreadNetwork')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    window.location.href = target;
                }, 300);
            }
        });
    });
});
