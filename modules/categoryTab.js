const categoryTab = () => {
  const categoriesTabButton = document.querySelectorAll(
    ".top-categories__tab .tab-list .tab-button"
  );
  const tabContents = document.querySelectorAll(
    ".top-categories__tab .top-categories__tab--body .tab-content"
  );
  categoriesTabButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      categoriesTabButton.forEach((button) => {
        button.closest(".tab-list__item").classList.remove("tab-active");
      });
      e.target.closest(".tab-list__item").classList.add("tab-active");
      const {
        clientWidth,
        offsetLeft,
        dataset: { tab: activeTabId },
      } = e.target;
      e.target
        .closest(".tab-list")
        .style.setProperty("--tab-active-width", `${clientWidth}px`);
      e.target
        .closest(".tab-list")
        .style.setProperty("--tab-active-left", `${offsetLeft}px`);
      tabContents.forEach((content) => {
        if (content.id !== activeTabId) {
          content.classList.remove("tab-active");
        } else {
          content.classList.add("tab-active");
        }
      });
    });
  });
};

export default categoryTab;
