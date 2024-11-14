
document.addEventListener('DOMContentLoaded', () => {

  // Function to reset all projects (close descriptions and reset centering)
  function resetProjects() {
    projectItems.forEach(item => {
      item.classList.remove('open'); // Remove "open" class (reset centering)
      item.classList.remove('hidden'); // Make sure all items are visible again
      const description = item.querySelector('.project-description');
      description.classList.add('hidden'); // Hide descriptions
      item.classList.add('hover:bg-blue-600')
      item.classList.add('random-color-btn')
    });
  }

  const projectItems = document.querySelectorAll('.project-item');
  const projectsContainer = document.querySelector('#projects');  // The container holding all project items


  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      const description = item.querySelector('.project-description');

      // If the clicked project is already open, we toggle it off
      const isAlreadyOpen = !description.classList.contains('hidden');

      // If it's already open, show all project items again and close the description
      if (isAlreadyOpen) {
        resetProjects()
      } else {
        // Otherwise, hide all other project items
        projectItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.add('hidden'); // Hide the other items
            const otherDescription = otherItem.querySelector('.project-description');
            otherDescription.classList.add('hidden'); // Hide other descriptions
            otherItem.classList.remove('open'); // Remove "open" class
          }
        });

        // Show the clicked project's description and add "open" class for centering
        description.classList.remove('hidden');
        item.classList.add('open'); // Add the "open" class to center the content
        item.classList.remove('hover:bg-blue-600')
        item.classList.remove('random-color-btn')
      }

      // Smooth scroll to the clicked project (it will be focused on top)
      window.scrollTo({
        top: item.offsetTop - 20,  // Adds a small offset to show the clicked project near the top
        behavior: 'smooth'
      });
    });
  });
});

// random color section
const colors = [
  'bg-blue-500',
  'bg-red-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-teal-500',
  'bg-gray-500',
  'bg-blue-600',      // Darker blue
  'bg-red-600',       // Darker red
  'bg-green-600',     // Darker green
  'bg-yellow-600',    // Darker yellow
  'bg-indigo-600',    // Darker indigo
  'bg-purple-600',    // Darker purple
  'bg-pink-600',      // Darker pink
  'bg-teal-600',      // Darker teal
  'bg-gray-600',      // Darker gray
  'bg-blue-400',      // Lighter blue
  'bg-red-400',       // Lighter red
  'bg-green-400',     // Lighter green
  'bg-yellow-400',    // Lighter yellow
  'bg-indigo-400',    // Lighter indigo
  'bg-purple-400',    // Lighter purple
  'bg-pink-400',      // Lighter pink
  'bg-teal-400',      // Lighter teal
  'bg-gray-400',      // Lighter gray
];

// Get all list items
const listItems = document.querySelectorAll('.random-color-btn');

// Function to get a random color class from the list
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Loop through each list item
listItems.forEach(item => {
  // On mouse enter, change the background color randomly
  item.addEventListener('mouseover', function () {
    // Remove any existing color class
    // Add a random background color class.
    item.classList.remove(...colors);
    if (item.classList.contains('random-color-btn')) {
      item.classList.add(getRandomColor());
    }

  });
});
