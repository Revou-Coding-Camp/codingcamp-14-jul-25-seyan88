# Portfolio Website - Sulastian Setiadi

## 📋 Deskripsi
Website portfolio personal yang menampilkan informasi tentang Sulastian Setiadi sebagai Full Stack Developer. Website ini dilengkapi dengan fitur interaktif, demo project, dan form contact yang responsif.

## 🚀 Fitur Utama

### 1. **Responsive Navigation**
- Navbar yang responsif dengan hamburger menu untuk mobile
- Logo branding dengan navigasi yang smooth
- Menu aktif indicator

### 2. **Hero Section dengan Greeting**
- Modal pop-up welcome untuk input nama pengguna
- Greeting yang dipersonalisasi
- Background video yang menarik
- Kategori project (Android, Website, Game)
- Scroll indicator untuk navigasi

### 3. **Project Showcase**
- Slider project dengan navigasi button
- Video demo dan gambar screenshot
- Indicator dots untuk navigasi
- Deskripsi project yang jelas

### 4. **Portfolio Section**
- Informasi personal dan profesional
- Skills grid yang interaktif
- Teknologi dan framework yang dikuasai

### 5. **Contact Form**
- Form input data lengkap (nama, tanggal lahir, jenis kelamin, pesan)
- Validasi form yang comprehensive
- Modal result yang menampilkan data yang diinput
- Kalkulasi umur otomatis
- Responsive design untuk mobile

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dan responsive design
- **JavaScript** - Interaktivitas dan DOM manipulation
- **Google Fonts** - Typography (EB Garamond)
- **Material Symbols** - Icons

## 📁 Struktur File

```
portfolio-website/
├── index.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── mylogo.png
│   ├── windvideo.mp4
│   ├── Financial care.mp4
│   └── LOGIN.jpg
└── README.md
```

## 🎯 Fitur JavaScript

### 1. **Modal Management**
```javascript
// Welcome modal untuk greeting
function submitName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        document.getElementById('nameModal').style.display = 'none';
        document.getElementById('username').textContent = name;
    }
}
```

### 2. **Project Slider**
```javascript
// Navigasi project dengan smooth transition
function changeProject(direction) {
    // Logic untuk mengubah project yang ditampilkan
    // Dengan animasi smooth dan indicator update
}
```

### 3. **Contact Form Handler**
```javascript
// Form submission dengan validasi
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Validasi data
    // Kalkulasi umur
    // Display result modal
});
```

### 4. **Age Calculator**
```javascript
// Menghitung umur berdasarkan tanggal lahir
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
```

### 5. **Responsive Navigation**
```javascript
// Toggle mobile menu
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
```

## 📱 Responsive Design

Website ini dioptimalkan untuk berbagai ukuran layar:

- **Desktop** (1200px+): Layout grid penuh
- **Tablet** (768px - 1199px): Layout yang disesuaikan
- **Mobile** (< 768px): Single column layout, hamburger menu

## 🎨 Komponen CSS Utama

### 1. **Modal Styling**
```css
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### 2. **Project Slider**
```css
.project-slider {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.project-card {
    transition: transform 0.3s ease;
}
```

### 3. **Responsive Grid**
```css
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 1rem;
}
```

## 🚀 Cara Menjalankan

1. **Clone atau download** repository ini
2. **Pastikan struktur folder** sesuai dengan yang tertera
3. **Buka file `index.html`** di browser
4. **Atau gunakan live server** untuk development

## 📋 Checklist Fitur

- ✅ Responsive design
- ✅ Interactive navigation
- ✅ Welcome modal
- ✅ Project showcase slider
- ✅ Contact form dengan validasi
- ✅ Age calculator
- ✅ Result modal dengan scroll support
- ✅ Mobile-friendly interface
- ✅ Smooth animations
- ✅ Cross-browser compatibility

## 🔧 Customization

### Mengubah Informasi Personal:
1. Edit bagian `profile-info` di HTML
2. Update skills di `skills-grid`
3. Ganti logo di folder `assets/`

### Menambah Project:
1. Tambah `project-card` baru di HTML
2. Update logic slider di JavaScript
3. Tambah indicator dot

### Styling:
1. Modify CSS variables untuk color scheme
2. Update font family di Google Fonts link
3. Adjust breakpoints untuk responsive design

## 📞 Contact Information

**Sulastian Setiadi**
- Position: Full Stack Developer
- Skills: Android Studio, PHP, MySQL, Supabase, HTML/CSS, JavaScript

## 📄 License

Ini adalah project personal portfolio. Silakan gunakan sebagai referensi dengan mencantumkan credit yang sesuai.

---

*Dibuat dengan ❤️ oleh Sulastian Setiadi*









// ========================================
// PORTFOLIO WEBSITE JAVASCRIPT
// Sulastian Setiadi - Full Stack Developer
// ========================================

// Global Variables
let currentProject = 0;
const totalProjects = 2;

// ========================================
// NAVBAR FUNCTIONALITY
// ========================================

// Toggle responsive navigation menu
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Close mobile menu when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbar = document.getElementById("navbar");
            navbar.className = "topnav";
        });
    });
});

// ========================================
// WELCOME MODAL FUNCTIONALITY
// ========================================

// Show welcome modal on page load
window.addEventListener('load', function() {
    document.getElementById('nameModal').style.display = 'flex';
});

// Handle name submission
function submitName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        document.getElementById('nameModal').style.display = 'none';
        document.getElementById('username').textContent = name;
        
        // Store name in session storage for future use
        sessionStorage.setItem('username', name);
    } else {
        alert('Silakan masukkan nama Anda terlebih dahulu!');
    }
}

// Allow Enter key to submit name
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitName();
    }
});

// Check if user already entered name
window.addEventListener('load', function() {
    const storedName = sessionStorage.getItem('username');
    if (storedName) {
        document.getElementById('nameModal').style.display = 'none';
        document.getElementById('username').textContent = storedName;
    }
});

// ========================================
// PROJECT SLIDER FUNCTIONALITY
// ========================================

// Initialize project slider
function initializeProjects() {
    showProject(currentProject);
}

// Show specific project
function showProject(index) {
    const projectCards = document.querySelectorAll('.project-card');
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    
    // Hide all project cards
    projectCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Remove active class from all indicator dots
    indicatorDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current project
    if (projectCards[index]) {
        projectCards[index].classList.add('active');
    }
    
    // Update indicator
    if (indicatorDots[index]) {
        indicatorDots[index].classList.add('active');
    }
}

// Change project with navigation buttons
function changeProject(direction) {
    currentProject += direction;
    
    // Loop around if at boundaries
    if (currentProject >= totalProjects) {
        currentProject = 0;
    } else if (currentProject < 0) {
        currentProject = totalProjects - 1;
    }
    
    showProject(currentProject);
}

// Go to specific project
function goToProject(index) {
    currentProject = index;
    showProject(currentProject);
}

// Auto-slide projects (optional)
function autoSlideProjects() {
    setInterval(() => {
        changeProject(1);
    }, 5000); // Change every 5 seconds
}

// ========================================
// SCROLL FUNCTIONALITY
// ========================================

// Scroll to projects section
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========================================
// CONTACT FORM FUNCTIONALITY
// ========================================

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggal_lahir').value;
            const jenisKelamin = document.getElementById('jenis_kelamin').value;
            const pesan = document.getElementById('pesan').value;
            
            // Validate form
            if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
                alert('Mohon lengkapi semua field!');
                return;
            }
            
            // Calculate age
            const birthDate = new Date(tanggalLahir);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            // Format date to Indonesian format
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const formattedDate = birthDate.toLocaleDateString('id-ID', options);
            
            // Display results in modal
            document.getElementById('contactResultNama').textContent = nama;
            document.getElementById('contactResultTanggal').textContent = formattedDate;
            document.getElementById('contactResultJenisKelamin').textContent = jenisKelamin;
            document.getElementById('contactResultUmur').textContent = age + ' tahun';
            document.getElementById('contactResultPesan').textContent = pesan;
            
            // Show result modal
            document.getElementById('contactResultModal').style.display = 'flex';
            
            // Reset form
            this.reset();
        });
    }
});

// Close contact result modal
function closeContactResultModal() {
    document.getElementById('contactResultModal').style.display = 'none';
}

// ========================================
// MODAL CLICK OUTSIDE TO CLOSE
// ========================================

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const nameModal = document.getElementById('nameModal');
    const contactResultModal = document.getElementById('contactResultModal');
    
    // Don't close name modal by clicking outside (user must enter name)
    if (event.target === nameModal) {
        // Keep modal open
    }
    
    // Close contact result modal when clicking outside
    if (event.target === contactResultModal) {
        closeContactResultModal();
    }
});

// ========================================
// ANIMATIONS AND EFFECTS
// ========================================

// Add fade-in animation to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Parallax effect for hero video
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const heroVideo = document.querySelector('.hero-image video');
    
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${rate}px)`;
    }
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Format phone number (if needed)
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

// Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Get current time greeting
function getTimeGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi';
    if (hour < 17) return 'Selamat Siang';
    if (hour < 20) return 'Selamat Sore';
    return 'Selamat Malam';
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Initialize project slider
    initializeProjects();
    
    // Add smooth scrolling class to html
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// ========================================
// KEYBOARD NAVIGATION
// ========================================

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Project navigation with arrow keys
    if (e.key === 'ArrowLeft') {
        changeProject(-1);
    } else if (e.key === 'ArrowRight') {
        changeProject(1);
    }
    
    // Close modals with Escape key
    if (e.key === 'Escape') {
        closeContactResultModal();
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ========================================
// ERROR HANDLING
// ========================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
    // You can add error reporting here
});

// ========================================
// EXPORT FUNCTIONS (if using modules)
// ========================================

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeProject,
        goToProject,
        submitName,
        scrollToProjects,
        closeContactResultModal,
        validateEmail,
        formatPhoneNumber
    };
}