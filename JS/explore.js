function updateProgress(step) {
    const steps = document.querySelectorAll('.step');
    const segments = document.querySelectorAll('.progress-segment');
  
    // Update step circles
    steps.forEach((item, index) => {
      if (index < step) {
        item.classList.add('completed');
        item.classList.remove('active');
      } else if (index === step - 1) {
        item.classList.add('active');
        item.classList.remove('completed');
      } else {
        item.classList.remove('completed', 'active');
      }
    });
  
    // Update progress line segments
    segments.forEach((segment, index) => {
      if (index < step - 1) {
        segment.classList.add('completed');
      } else {
        segment.classList.remove('completed');
      }
    });
  }