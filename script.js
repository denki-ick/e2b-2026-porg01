const filterTabs = document.querySelectorAll(".filter-tab");
const products = document.querySelectorAll(".product-card");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.filter;

    filterTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    products.forEach((product) => {
      product.hidden = category !== "all" && product.dataset.category !== category;
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
  });
});

const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(newsletterForm).get("email");

  if (!newsletterForm.reportValidity()) return;

  formMessage.textContent = `${email} を登録しました。おたよりをお楽しみに♡`;
  newsletterForm.reset();
});
