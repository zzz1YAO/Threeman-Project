// 现有的代码保持不变

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

// 新增的项目切换功能

let currentProject = 0; // 当前显示的项目索引
const projects = document.querySelectorAll('.project');
const projectContent = document.querySelector('.project-content');
const totalProjects = projects.length;

// 初始化项目位置
function updateProjectPosition() {
    projectContent.style.transform = `translateX(-${currentProject * 100}%)`;
}

// 显示下一个项目
function nextProject() {
    if (currentProject < totalProjects - 1) {
        currentProject++;
    } else {
        currentProject = 0; // 循环到第一个项目
    }
    updateProjectPosition();
}

// 显示上一个项目
function prevProject() {
    if (currentProject > 0) {
        currentProject--;
    } else {
        currentProject = totalProjects - 1; // 循环到最后一个项目
    }
    updateProjectPosition();
}

// 初始化显示第一个项目
document.addEventListener('DOMContentLoaded', updateProjectPosition);
