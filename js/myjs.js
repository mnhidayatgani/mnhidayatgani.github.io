const scriptURL =
        "https://script.google.com/macros/s/AKfycbyQmWA4c3pb5S-MGJq3twxpyM91eBHczt9INfcoGYl9YELuA5vUTjbSlJdQfYqEcSkN/exec";
      const form = document.forms["submit-to-google-sheet"];
      const btnKirim = document.querySelector(".btn-kirim");
      const btnLoading = document.querySelector(".btn-loading");
      const myAlert = document.querySelector(".my-alert");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Ketika tombol submit di klik
        // Tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            // Tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            // Tampilkan alert
            myAlert.classList.toggle("d-none");
            // reset form
            form.reset();
            console.log("Success!", response);
          })
          .catch((error) => {
            console.error("Error!", error.message);
          });
      });