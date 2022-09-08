alert(`Selamat datang di game tebak angka
kamu di minta menebak angka 1 - 3
dan kamu akan bermain 5 ronde
player yang berhasil mengumpulkan tebakan terbanyak akan memang
SELAMT BERMAIN...`);

let skorP1 = 0;
let skorP2 = 0;

for (let i = 1; i <= 5; i++) {
  const random = Math.floor(Math.random() * 4);
  const player1 = prompt("Player 1 : masukan angka...");
  const player2 = prompt("Player 2 : masukan angka...");

  if (player1 < 1 || player2 < 1) {
    alert("Tebakan tidak boleh lebih kecil dari 1");
    const ulangi = confirm("ulangi ?");
    if (ulangi) {
      i -= 1;
    }
  } else if (player1 <= 3 && player2 <= 3) {
    if (player1 !== player2) {
      if (player1 == random) {
        skorP1 += 1;
        alert(`Player 1 win`);
        alert(`angka yang di cari : ${random}
-----------
Player1 : ${skorP1}
Player2 : ${skorP2}`);
        if (i < 5) {
          const lanjut = confirm(`Ronde ${i + 1}`);
          if (!lanjut) {
            break;
          }
        }
      } else if (player2 == random) {
        skorP2 += 1;
        alert(`Player 2 win`);
        alert(`angka yang di cari : ${random}
-----------
Player1 : ${skorP1}
Player2 : ${skorP2}`);
        if (i < 5) {
          const lanjut = confirm(`Ronde ${i + 1}`);
          if (!lanjut) {
            break;
          }
        }
      } else {
        alert(`Tidak ada yang benar. SERI`);
        alert(`angka yang di cari : ${random}
-----------
Player1 : ${skorP1}
Player2 : ${skorP2}`);
        if (i < 5) {
          const lanjut = confirm(`Ronde ${i + 1}`);
          if (!lanjut) {
            break;
          }
        }
      }
    } else {
      alert("Tebakan tidak boleh sama");
      const ulangi = confirm("ulangi ?");
      if (ulangi) {
        i -= 1;
      }
    }
  } else {
    alert("tebakan tidak boleh lebih besar dari 3");
    const ulangi = confirm("ulangi ?");
    if (ulangi) {
      i -= 1;
    }
  }
}

if (skorP1 > skorP2) {
  alert("Good Joob Player 1");
} else if (skorP1 < skorP2) {
  alert("Good Joob Player 2");
} else {
  alert("SERI");
}
