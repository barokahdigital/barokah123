// Kunci konfigurasi proyek Anda (dari Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyASdrMSuylnugIaAgDjQPqmIKQVeFQ8tv0",
    authDomain: "barokah-123.firebaseapp.com",
    projectId: "barokah-123",
    storageBucket: "barokah-123.firebasestorage.app",
    messagingSenderId: "388864269573",
    appId: "1:388864269573:web:0d71241beeb6bd44c3eb6c"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Semua fungsi aplikasi dimulai di sini
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Catatan: Jika Anda menggunakan Auth Firebase, username biasanya adalah EMAIL.
    const emailMap = {
        'admin': 'admin@rt04.com',
        'user': 'user@rt04.com'
    };
    
    const email = emailMap[username.toLowerCase()] || username;

    // Menggunakan objek 'auth'
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login Sukses
            console.log("Login Berhasil!");
            document.getElementById('loginPage').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');
            // Lanjutkan logika untuk memeriksa role (admin/user) dan memuat data
        })
        .catch((error) => {
            // Login Gagal
            alert("Login Gagal: " + error.message);
        });
}

// Tambahkan fungsi-fungsi lain di sini (misalnya: loadDashboardData(), saveTransaction(), dll.)
