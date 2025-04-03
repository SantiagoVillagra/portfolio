const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll("mobile-nav__link");

  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen === true) {
      mobileNav.style.display = "flex";
      document.body.style.overflowy = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowy = "auto";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        isMobileNavOpen = false
        mobileNav.style.display = 'none'
        document.body.style.overflowy = 'auto'
    });
  });
};

export default mobileNav;
