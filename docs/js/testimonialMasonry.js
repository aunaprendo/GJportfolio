const testimonialGrid = document.querySelector(".testimonial-masonry");

if (testimonialGrid) {
  const testimonialItems = testimonialGrid.querySelectorAll(".testimonial-link");

  function resizeTestimonial(item) {
    const gridStyles = getComputedStyle(testimonialGrid);
    const rowHeight = parseFloat(gridStyles.gridAutoRows);
    const rowGap = parseFloat(gridStyles.rowGap);
    const itemHeight = item.getBoundingClientRect().height;

    const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));

    item.style.gridRowEnd = `span ${rowSpan}`;
  }

  function resizeTestimonials() {
    testimonialItems.forEach(resizeTestimonial);
  }

  const testimonialObserver = new ResizeObserver(() => {
    requestAnimationFrame(resizeTestimonials);
  });

  testimonialItems.forEach((item) => {
    testimonialObserver.observe(item);
  });

  window.addEventListener("load", resizeTestimonials);
  window.addEventListener("resize", resizeTestimonials);
}
