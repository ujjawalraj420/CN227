document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
});

document.getElementById('goalSettingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fitnessGoal = document.getElementById('fitnessGoal').value;
    const nutritionGoal = document.getElementById('nutritionGoal').value;
    
});