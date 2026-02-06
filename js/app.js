// Cart Logic
let cartCount = parseInt(localStorage.getItem('void_cart_count')) || 0;
const cartDisplay = document.getElementById('cart-count');

function updateCartDisplay() {
    if (cartDisplay) {
        cartDisplay.innerText = cartCount;
    }
}

const addBtn = document.getElementById('add-to-cart');
if (addBtn) {
    addBtn.addEventListener('click', () => {
        cartCount++;
        localStorage.setItem('void_cart_count', cartCount);
        updateCartDisplay();
        addBtn.innerText = 'Added to Collection';
        addBtn.style.backgroundColor = '#ffffff';
        setTimeout(() => {
            addBtn.innerText = 'Add to Collection';
            addBtn.style.backgroundColor = '#CCFF00';
        }, 2000);
    });
}

// Countdown Timer
const countdownEl = document.getElementById('countdown');
if (countdownEl) {
    let timeLeft = 345600; // 4 days in seconds
    
    const timer = setInterval(() => {
        const days = Math.floor(timeLeft / 86400);
        const hours = Math.floor((timeLeft % 86400) / 3600);
        const mins = Math.floor((timeLeft % 3600) / 60);
        const secs = timeLeft % 60;

        countdownEl.innerText = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) clearInterval(timer);
        timeLeft--;
    }, 1000);
}

// Active Link Highlighting
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('text-[#CCFF00]');
    } else {
        link.classList.remove('text-[#CCFF00]');
    }
});

updateCartDisplay();