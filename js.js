document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
  
    if (nama && email && pesan) {
      document.getElementById('formMessage').textContent = `Terima kasih, ${nama}. Pesan Anda telah dikirim!`;
      this.reset();
    } else {
      document.getElementById('formMessage').textContent = 'Mohon lengkapi semua bidang!';
    }
  });
  
  