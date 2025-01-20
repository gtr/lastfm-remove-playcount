function removePlayCounts() {
  const auxTexts = document.querySelectorAll('.grid-items-item-aux-text');
  
  auxTexts.forEach(auxText => {
    const links = auxText.querySelectorAll('a');
    if (links.length > 1) {
      links[links.length - 1].remove();
    }
  });
}

