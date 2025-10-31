document.addEventListener("DOMContentLoaded", () => {
  const items = [
    {
      icon: "./IMG/CalendarBlank.png",
      title: "Manage all your <br> bookings in one place.",
      desc: "With the option to view and manage your <br> staffs bookings too!",
      img: "./IMG/Frame 14604.png",
      label: "Manage Bookings"
    },
    {
      icon: "./IMG/Rows.png",
      title: "Organise all of your <br> services easily.",
      desc: "Make adjustments to your services anytime and <br> allow your customers to make bookings 24/7.",
      img: "./IMG/Frame 146044.png",
      label: "Organise Services"
    },
    {
      icon: "./IMG/ChartBar.png",
      title: "Get up to date analytic <br> on your business.",
      desc: "See upcoming bookings, cashflow <br> summaries + more...",
      img: "./IMG/Frame 14604 (1).png",
      label: "Business Analytics"
    },
    {
      icon: "./IMG/CalendarBlank.png",
      title: "Easily withdraw your <br> balance income.",
      desc: "Receive payments quickly and securely <br> right from your dashboard.",
      img: "./IMG/Frame 14604 (2).png",
      label: "Receive Payments"
    }
  ];

  let index = 0;

  const contentIcon = document.getElementById("content-icon");
  const contentLabel = document.getElementById("content-label");
  const contentImg = document.getElementById("content-img");
  const contentTitle = document.getElementById("content-title");
  const contentDesc = document.getElementById("content-desc");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const buttons = document.querySelectorAll(".btn-nav");

  // Fungsi update tampilan
  function updateContent(i) {
    index = i;
    const item = items[index];

    contentImg.src = item.img;
    contentTitle.innerHTML = item.title;
    contentDesc.innerHTML = item.desc;
    if (contentLabel) contentLabel.innerHTML = item.label;
    if (contentIcon) contentIcon.src = item.icon;

    // Ganti tombol aktif di desktop
    buttons.forEach(b => b.classList.remove("active"));
    if (buttons[index]) buttons[index].classList.add("active");
  }

  // Tombol prev/next (mobile)
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + items.length) % items.length;
      updateContent(index);
    });
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % items.length;
      updateContent(index);
    });
  }

  // Tombol di desktop
  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      updateContent(i);
    });
  });

  // Pertama kali load
  updateContent(0);
});
const menuToggle = document.getElementById("menuToggle");
const navRight = document.getElementById("navRight");

menuToggle.addEventListener("click", () => {
  navRight.classList.toggle("active");
});
 document.addEventListener("DOMContentLoaded", () => {
      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach(item => {
        const btn = item.querySelector(".faq-question");
        btn.addEventListener("click", () => {
          // Tutup semua FAQ lain biar cuma satu yang kebuka
          faqItems.forEach(i => {
            if (i !== item) i.classList.remove("active");
          });

          // Toggle FAQ yang diklik
          item.classList.toggle("active");
        });
      });
    });


