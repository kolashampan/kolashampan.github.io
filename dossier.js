// Callback function for Intersection Observer
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    const link = document.querySelector(`.table_contents a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      // Add 'active' class to the parent <li> of the link
      link.parentElement.classList.add('active');
    } else {
      // Remove 'active' class from the parent <li> of the link
      link.parentElement.classList.remove('active');
    }
  });
};

// Options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '20px',
  threshold: 0.3 // Trigger when 50% of the element is visible
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Select all sections
const sections = document.querySelectorAll('#overview, #typical, #professional, #job, #technical, #training, #labor, #reso');

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Optional: Add tooltips to the links
const links = document.querySelectorAll('.table_contents a');
links.forEach(link => {
  const previewContent = link.getAttribute('data-preview');
  const tooltip = document.createElement('span');
  tooltip.className = 'tooltiptext';
  tooltip.textContent = previewContent;
  link.appendChild(tooltip);
});
