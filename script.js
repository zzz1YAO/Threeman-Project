// Function to show member details in modal
function showDetails(member) {
    const modal = document.getElementById('modal');
    const name = document.getElementById('modal-name');
    const position = document.getElementById('modal-position');
    const description = document.getElementById('modal-description');

    // Change content based on the clicked team member
    if (member === 'ziyao') {
        name.textContent = 'Ziyao';
        position.textContent = 'Algorithm Specialist';
        description.textContent = 'Ziyao specializes in creating and optimizing algorithms that power our systems. With a passion for data-driven solutions, Ziyao ensures our systems are both efficient and scalable.';
    } else if (member === 'hamster') {
        name.textContent = 'Hamster';
        position.textContent = 'Designer';
        description.textContent = 'Hamster designs user-friendly and visually appealing interfaces. Combining creativity with usability, Hamster enhances the user experience across all platforms.';
    } else if (member === 'bridge') {
        name.textContent = 'Bridge';
        position.textContent = 'Frontend & Backend Developer';
        description.textContent = 'Bridge handles both frontend and backend development. With expertise in building responsive and robust web applications, Bridge ensures seamless functionality across all devices.';
    }

    // Display the modal
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
}
