const currentTab = document.getElementById('Current-Tab');
        const gridItems = document.querySelectorAll('.grid-item');

        // Add hover event for each grid-item
        gridItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Remove the Current-tab class when hovering on grid-item
                currentTab.classList.remove('Current-tab');
            });
        });