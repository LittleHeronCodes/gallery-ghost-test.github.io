
// Select all tab buttons and tab contents
const tabButtons = document.querySelectorAll('.results-html .tab-button');
const tabContents = document.querySelectorAll('.results-html .tab-content');

// Add click event to each tab button
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all tab contents
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to the clicked tab's content
    tabContents[index].classList.add('active');
  });
});

let currentPage = 1;
      
function showPage(page) {
    document.querySelectorAll('.quiz-page').forEach(el => el.style.display = 'none');
    document.getElementById('page' + page).style.display = 'block';
    currentPage = page;
}

function nextPage() {
	// Logic to navigate to the next page
	const currentPage = document.querySelector('.quiz-page.active');
	if (currentPage) {
		currentPage.classList.remove('active');
		const nextPage = currentPage.nextElementSibling;
		if (nextPage && nextPage.classList.contains('quiz-page')) {
			nextPage.classList.add('active');
		}
	}
}

function prevPage() {
	// Logic to navigate to the previous page
	const currentPage = document.querySelector('.quiz-page.active');
	if (currentPage) {
		currentPage.classList.remove('active');
		const prevPage = currentPage.previousElementSibling;
		if (prevPage && prevPage.classList.contains('quiz-page')) {
			prevPage.classList.add('active');
		}
	}
}


function calculateScore() {
	// Logic to calculate and display the score
	let score = 0;
	const answers = document.querySelectorAll('input[type="radio"]:checked');
	answers.forEach(answer => {
		// Example scoring logic (adjust as needed)
		if (answer.value === 'correct') {
			score++;
		}
	});
	document.getElementById('scoreDisplay').textContent = `Your Score: ${score}`;
}

