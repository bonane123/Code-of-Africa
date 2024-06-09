document.querySelectorAll('.img-container').forEach(container => {
    container.addEventListener('mouseover', () => {
      container.querySelector('img').classList.add('hovered');
      container.querySelector('.img-overlay').classList.add('hovered');
      container.querySelector('.know-more').classList.add('visible');
    });
  
    container.addEventListener('mouseout', () => {
      container.querySelector('img').classList.remove('hovered');
      container.querySelector('.img-overlay').classList.remove('hovered');
      container.querySelector('.know-more').classList.remove('visible');
    });
  });
  