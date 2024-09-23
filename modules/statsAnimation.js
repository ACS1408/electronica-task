import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsAnimation = () => {
  const animateCountUp = (element) => {
    const value = element.dataset.value;

    if (value.includes("*")) {
      const [num1, num2] = value.split("*").map(Number);
      gsap.to(element, {
        innerHTML: value,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        onUpdate: function () {
          const current1 = Math.round(num1 * this.progress());
          const current2 = Math.round(num2 * this.progress());
          element.textContent = `${current1}*${current2}`;
        },
      });
    } else {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      const suffix = value.replace(/[0-9.]/g, "");

      gsap.to(element, {
        innerHTML: value,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        onUpdate: function () {
          const currentValue = Math.round(numericValue * this.progress());
          element.textContent = currentValue + suffix;
        },
      });
    }
  };

  document.querySelectorAll(".countup").forEach(animateCountUp);
};

export default statsAnimation;
