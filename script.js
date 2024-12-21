const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.getElementById('menuButton').addEventListener('click', () => {
    window.location.href = '#menu';
});

let menu = document.querySelector(".menu");
let nums = document.querySelectorAll(".num");
let start = false;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);

  if (window.scrollY >= menu.offsetTop) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }
});

const startCount = (el) => {
  let max = el.dataset.val;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === max) {
      clearInterval(count);
    }
  }, 2000 / nums);
};

const bookButton = document.getElementById("book_button");

const handleAlert = () => {
  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const time = document.getElementById("time").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!firstName || !lastName || !time || !phone) {
    alert("Будь ласка, заповніть всі поля!");
    return;
  }

  console.log(firstName, lastName, time, phone);
  alert(`Привіт ${firstName} ${lastName}, ваш запис на ${time}. Телефон: ${phone}`);
};

bookButton.addEventListener("click", handleAlert);