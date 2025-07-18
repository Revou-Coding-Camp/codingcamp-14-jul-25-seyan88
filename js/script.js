

// 2. Gunakan hanya satu modal untuk nama pengguna
function myFunction() {
    const navbar = document.getElementById("navbar");
    const icon = document.getElementById("menuIcon");

    navbar.classList.toggle("responsive");

    if (navbar.classList.contains("responsive")) {
        icon.textContent = "close";
    } else {
        icon.textContent = "menu_open";
    }
}

// MODAL NAMA UTAMA - HANYA INI YANG DIJALANKAN
document.addEventListener("DOMContentLoaded", function () {
    // Tampilkan modal saat halaman dibuka
    document.getElementById("nameModal").style.display = "flex";
});

function submitName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name) {
        document.getElementById("username").textContent = name;
        document.getElementById("nameModal").style.display = "none";
        
        // Simpan nama ke localStorage untuk keperluan lain jika diperlukan
        localStorage.setItem('userName', name);
        
        console.log('Welcome, ' + name + '!');
    } else {
        alert("Nama tidak boleh kosong.");
    }
}

// FUNGSI SCROLLING
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// FUNGSI DEMO PROJECT
let currentProject = 0;
const projects = document.querySelectorAll('.project-card');
const indicators = document.querySelectorAll('.indicator-dot');
const totalProjects = projects.length;

function showProject(index) {
    // Sembunyikan semua project
    projects.forEach(project => {
        project.classList.remove('active');
    });
    
    // Sembunyikan semua indicator
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Tampilkan project yang dipilih
    projects[index].classList.add('active');
    indicators[index].classList.add('active');
}

function changeProject(direction) {
    currentProject += direction;
    
    // Loop ke awal jika sudah di akhir
    if (currentProject >= totalProjects) {
        currentProject = 0;
    }
    
    // Loop ke akhir jika sudah di awal
    if (currentProject < 0) {
        currentProject = totalProjects - 1;
    }
    
    showProject(currentProject);
}

function goToProject(index) {
    currentProject = index;
    showProject(currentProject);
}

// Inisialisasi tampilan awal
if (totalProjects > 0) {
    showProject(currentProject);
}

// EVENT LISTENERS
document.addEventListener('selectstart', function(event) {
    // Izinkan seleksi pada input dan textarea
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }
    // Cegah seleksi pada elemen lain
    event.preventDefault();
});

// Event listener untuk video
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('click', function(event) {
            event.stopPropagation();
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
});

// Keyboard navigation untuk project
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeProject(-1);
    } else if (event.key === 'ArrowRight') {
        changeProject(1);
    }
});

// BAGIAN CONTACT FORM - TANPA MODAL NAMA TERPISAH
// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const contactNama = document.getElementById('nama').value;
            const contactTanggalLahir = document.getElementById('tanggal_lahir').value;
            const contactJenisKelamin = document.getElementById('jenis_kelamin').value;
            const contactPesan = document.getElementById('pesan').value;
            
            // Calculate age
            const birthDate = new Date(contactTanggalLahir);
            const today = new Date();
            let contactAge = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                contactAge--;
            }
            
            // Format date to Indonesian format
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const formattedContactDate = birthDate.toLocaleDateString('id-ID', options);
            
            // Display results in modal
            document.getElementById('contactResultNama').textContent = contactNama;
            document.getElementById('contactResultTanggal').textContent = formattedContactDate;
            document.getElementById('contactResultJenisKelamin').textContent = contactJenisKelamin;
            document.getElementById('contactResultUmur').textContent = contactAge + ' tahun';
            document.getElementById('contactResultPesan').textContent = contactPesan;
            
            // Show result modal
            document.getElementById('contactResultModal').style.display = 'block';
            
            // Reset form
            this.reset();
        });
    }
});

// Close contact result modal
function closeContactResultModal() {
    document.getElementById('contactResultModal').style.display = 'none';
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const contactResultModal = document.getElementById('contactResultModal');
    
    if (event.target === contactResultModal) {
        closeContactResultModal();
    }
});

// Add smooth scrolling effect for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to sections
    const portfolioSections = document.querySelectorAll('.portfolio-section, .contact-section');
    portfolioSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease-out';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200);
    });
});

// SOLUSI ALTERNATIF: Jika ingin menggunakan nama yang sudah diinput sebelumnya
function getStoredUserName() {
    return localStorage.getItem('userName') || '';
}

function setStoredUserName(name) {
    localStorage.setItem('userName', name);
}

// FUNGSI TAMBAHAN: Cek apakah user sudah pernah input nama
function checkUserNameExists() {
    const storedName = getStoredUserName();
    if (storedName) {
        document.getElementById("username").textContent = storedName;
        return true;
    }
    return false;
}

// MODIFIKASI UNTUK MENAMPILKAN MODAL HANYA JIKA BELUM ADA NAMA
document.addEventListener("DOMContentLoaded", function () {
    // Cek apakah sudah ada nama tersimpan
    if (!checkUserNameExists()) {
        // Tampilkan modal hanya jika belum ada nama
        document.getElementById("nameModal").style.display = "flex";
    }
});

// UPDATE FUNGSI submitName untuk menyimpan nama
function submitName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name) {
        document.getElementById("username").textContent = name;
        document.getElementById("nameModal").style.display = "none";
        
        // Simpan nama untuk session berikutnya
        setStoredUserName(name);
        
        console.log('Welcome, ' + name + '!');
    } else {
        alert("Nama tidak boleh kosong.");
    }
}
