document.getElementById('startButton').addEventListener('click', function() {
    const steps = document.querySelectorAll('.step');
    let index = 0;

    function showNextStep() {
        if (index < steps.length) {
            steps[index].classList.add('active');
            index++;
            setTimeout(showNextStep, 2000); // Show each step for 2 seconds
        }
    }

    showNextStep();
});