const createRating = () => {
  const ratingDiv = document.querySelectorAll(".rating");

  ratingDiv.forEach((rating) => {
    const ratingValue = rating.dataset.rating;
    const maxStars = 5;

    let stars = "";
    for (let i = 1; i <= maxStars; i++) {
      if (i <= ratingValue) {
        stars += '<span class="star filled">&#9733;</span>';
      } else {
        stars += '<span class="star">&#9734;</span>';
      }
    }

    rating.innerHTML = stars;
  });
};

export default createRating;
