// ================================
// Student Grades Manager (DOM Lab)
// ================================

// Select main elements (TODO: update these selections)
const studentList = document.getElementById("student-list");
const averageDisplay = document.getElementById("average");
const topStudentDisplay = document.getElementById("top-student");
const form = document.getElementById("student-form");

// ================================
// Helper Functions
// ================================

// TODO: Get all scores from the student list
function getScores() {
  // Hint: Look at children of studentList and their "data-score" attributes
  return [];
}

// TODO: Calculate average score from an array of scores
function getAverage(scores) {
  return 0; // placeholder
}

// TODO: Find the top student (highest score)
function getTopStudent() {
  return null; // placeholder
}

// TODO: Update pass/fail status of each student
function updatePassFail() {
  // Hint: Loop through studentList children
  // Apply "pass" or "fail" class depending on score
}

// TODO: Update results (average + top student)
function updateResults() {
  // Hint: Call getScores() and getTopStudent()
  // Update averageDisplay and topStudentDisplay
}

// ================================
// Event Listeners
// ================================

// Handle form submission to add a new student
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // TODO: Get values from inputs
  const nameInput = document.getElementById("name");
  const scoreInput = document.getElementById("score");

  const name = nameInput.value.trim();
  const score = scoreInput.value;

  if (name && score) {
    // TODO: Create a new <li> element for the student
    // - Set its text
    // - Set data-score attribute
    // - Append to studentList

    // Clear form
    form.reset();

    // Update results after adding student
    updatePassFail();
    updateResults();
  }
});

// ================================
// Initial Setup
// ================================
updatePassFail();
updateResults();
