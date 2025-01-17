document.getElementById('coursesCompleted').addEventListener('input', function() {
    const coursesCompleted = parseInt(this.value);
    if (!isNaN(coursesCompleted)) {
        document.getElementById('creditsCompleted').value = coursesCompleted * 3;
    } else {
        document.getElementById('creditsCompleted').value = '';
    }
});

document.getElementById('creditsCompleted').addEventListener('input', function() {
    const creditsCompleted = parseInt(this.value);
    if (!isNaN(creditsCompleted)) {
        document.getElementById('coursesCompleted').value = Math.floor(creditsCompleted / 3);
    } else {
        document.getElementById('coursesCompleted').value = '';
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('currentCourses').style.display = 'block';
    const numCourses = document.getElementById('coursesTaken').value;
    const courseInputs = document.getElementById('courseInputs');
    courseInputs.innerHTML = '';

    for (let i = 0; i < numCourses; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `CGPA for Course ${i + 1}`;
        courseInputs.appendChild(input);
    }
});

document.getElementById('calculateButton').addEventListener('click', function() {
    const currentCgpa = parseFloat(document.getElementById('currentCgpa').value);
    let coursesCompleted = parseInt(document.getElementById('coursesCompleted').value);
    const creditsCompleted = parseInt(document.getElementById('creditsCompleted').value);
    
    // Calculate courses completed if credits are provided
    if (creditsCompleted) {
        coursesCompleted = Math.floor(creditsCompleted / 3);
    }

    const numCourses = parseInt(document.getElementById('coursesTaken').value);
    const courseInputs = document.getElementById('courseInputs').getElementsByTagName('input');
    
    let totalCurrentCgpa = 0;
    for (let input of courseInputs) {
        totalCurrentCgpa += parseFloat(input.value);
    }

    const newCgpa = ((coursesCompleted * currentCgpa) + totalCurrentCgpa) / (coursesCompleted + numCourses);
    document.getElementById('newCgpa').innerText = newCgpa.toFixed(2);
    document.getElementById('result').style.display = 'block';
});
