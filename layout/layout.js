
const categoriesToggle = document.getElementById('categories-toggle');
categoriesToggle.addEventListener('click', function() {
    this.parentNode.classList.toggle('open');
});

 // Modal functionality
const modal = document.getElementById('product-modal');
const btn = document.getElementById('add-product-btn');


btn.onclick = function() {
  modal.style.display = 'block';
  document.body.style.overflow = "hidden"; // Disable background scrolling
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = "auto"; // Enable background scroll
  }
};

const deleteButton = document.getElementById('delete');

// Close the modal using the Delete button
deleteButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Close the modal by clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Get the form element
const form = document.getElementById('productForm');

// Add an event listener to the form submission
form.addEventListener('submit', async(e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Collect form data into an object
  const productData = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    cover_image: document.getElementById('coverImage').value,
    author: document.getElementById('author').value,
    rate: parseInt(document.getElementById('rate').value),
    genre: document.getElementById('genre').value.split(',').map(item => item.trim()),
    publication_year: parseInt(document.getElementById('publicationYear').value),
    price: parseFloat(document.getElementById('price').value),
    most_popular: document.getElementById('mostPopular').value === 'true'
  };


// Function fetch data
try {
  const response = await fetch('http://localhost:3030/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (response.ok) {
    const result = await response.json();
    alert('Product added successfully!');
    console.log('API Response:', result);
  } else {
    throw new Error('Failed to add product. Please try again.');
  }
} catch (error) {
  console.error(error);
  alert('An error occurred. Please try again later.');
}
form.reset();
});

