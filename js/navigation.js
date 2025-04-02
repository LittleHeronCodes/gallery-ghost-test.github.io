function boxClicked(boxName) {
    const panel = document.getElementById('panel');
    const panelContent = document.getElementById('panel-content');

    // Set the content of the panel
    panelContent.textContent = `${boxName} clicked!`;

    // Show the panel
    panel.classList.remove('hidden');
}

function areaClicked(areaName) {
    // Hide all panels first
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.classList.add('hidden'));

    // Show the appropriate panel based on the area clicked
    if (areaName === 'Security') {
        const panel1 = document.getElementById('panel1');
        panel1.classList.remove('hidden');
    } else if (areaName === 'Common') {
        const panel2 = document.getElementById('panel2');
        panel2.classList.remove('hidden');
    }
}

function closePanel() {
    // Hide all panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.classList.add('hidden'));
}

