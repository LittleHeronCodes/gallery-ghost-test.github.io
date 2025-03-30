// JavaScript for the ending page

// Tab control
function openTab(event, tabId) {
  // Deactivate all tab buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => button.classList.remove('active'));
  
  // Deactivate all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));
  
  // Activate the clicked tab button
  if (event) {
    event.currentTarget.classList.add('active');
  }
  
  // Activate the corresponding tab content
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  }

// Page control
let currentPage = 1;

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

function goToEnding() {
  // Calculate the score
  // calculateScore();
  getEnding();
  
  openTab(null, 'ending-tab');

  // Activate the "Ending" tab button and content
  const endingTabButton = document.querySelector('.tab-button[onclick*="ending-tab"]');
  if (endingTabButton) endingTabButton.classList.add('active');
}

function goToScores() {
  getEnding();
  openTab(null, 'score-tab');

  const scoreTabButton = document.querySelector('.tab-button[onclick*="score-tab"]');
  if (scoreTabButton) scoreTabButton.classList.add('active');
}

function calculateScore() {
  // Initialize score
  let score = 0;

  // Get all selected answers
  const answers = document.querySelectorAll('input[type="radio"]:checked');

  // Example scoring logic
  answers.forEach(answer => {
  if (answer.value === 'correct') {
    score++;
  }
  });

}

