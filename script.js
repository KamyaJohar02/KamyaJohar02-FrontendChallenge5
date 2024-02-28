function toggleIcon(button) {
    const plus = button.getElementsByClassName('plus-icon')[0];
    const panel = button.parentElement.nextElementSibling;
    const minus = button.getElementsByClassName('minus-icon')[0];

    // Toggle the panel visibility and plus/minus icons
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    plus.style.display = panel.style.display === 'block' ? 'none' : 'block';
    minus.style.display = panel.style.display === 'block' ? 'block' : 'none';
}
