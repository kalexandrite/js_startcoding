 function toggleLayout() {
      const layoutContainer = document.getElementById('layout-container');
      
      // Toggle between two different layouts
      if (layoutContainer.style.flexDirection === 'row') {
        layoutContainer.style.flexDirection = 'column';
      } else {
        layoutContainer.style.flexDirection = 'row';
      }
    }
