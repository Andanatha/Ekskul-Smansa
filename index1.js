const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const itemWidth = items[0].offsetWidth;
const totalItems = items.length;
let currentIndex = 0;

function handleClick(direction) {
  if (direction === "previous") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1; // Jika sudah di slide pertama, kembali ke slide terakhir
    }
  } else {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0; // Jika sudah di slide terakhir, kembali ke slide pertama
    }
  }

  const newPosition = currentIndex * itemWidth;
  list.scrollTo({
    left: newPosition,
    behavior: "smooth"
  });
}


