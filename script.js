function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

 // Mendapatkan waktu saat ini
 function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return {
      hours,
      minutes,
      seconds
    };
  }

  // Mendapatkan waktu sholat Maghrib dalam detik pada hari ini
  function getMaghribTime() {
    // Ganti dengan logika untuk mendapatkan waktu sholat Maghrib
    const maghribTime = {
      hours: 18,
      minutes: 0,
      seconds: 0
    };

    return maghribTime;
  }

  // Menghitung selisih waktu mundur dari waktu sekarang ke waktu sholat Maghrib
  function calculateCountdown() {
    const currentTime = getCurrentTime();
    const maghribTime = getMaghribTime();

    // Menghitung selisih waktu dalam detik
    const currentSeconds = currentTime.hours * 3600 + currentTime.minutes * 60 + currentTime.seconds;
    const maghribSeconds = maghribTime.hours * 3600 + maghribTime.minutes * 60 + maghribTime.seconds;
    let countdownSeconds = maghribSeconds - currentSeconds;

    // Jika waktu sholat Maghrib sudah lewat pada hari ini, tambahkan 24 jam (86400 detik)
    if (countdownSeconds < 0) {
      countdownSeconds += 86400;
    }

    // Menghitung jam, menit, dan detik dari selisih waktu
    const hours = Math.floor(countdownSeconds / 3600);
    const minutes = Math.floor((countdownSeconds % 3600) / 60);
    const seconds = countdownSeconds % 60;

    return {
      hours,
      minutes,
      seconds
    };
  }

  // Memperbarui tampilan hitung mundur setiap detik
  function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const countdown = calculateCountdown();

    // Format waktu dengan menambahkan 0 di depan jika angka < 10
    const formattedHours = countdown.hours < 10 ? '0' + countdown.hours : countdown.hours;
    const formattedMinutes = countdown.minutes < 10 ? '0' + countdown.minutes : countdown.minutes;
    const formattedSeconds = countdown.seconds < 10 ? '0' + countdown.seconds : countdown.seconds;

    // Tampilkan hitung mundur pada elemen countdown
    countdownElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  // Panggil fungsi updateCountdown setiap detik
  setInterval(updateCountdown, 1000);