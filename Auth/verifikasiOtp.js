const codes = document.querySelectorAll('.code');
let inputStarted = false;

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (!inputStarted) {
            inputStarted = true;
            return;
            //Tidak mengatur fokus jika input belum dimulai
        }

        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
    });
});