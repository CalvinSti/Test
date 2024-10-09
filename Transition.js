const observer = new IntersectionObserver((entries) => { /*Java gods please make this work*/

    entries.forEach((entry) => {
    
    console.log(entry)
    
    if (entry.isIntersecting) {
    
    entry.target.classList.add('show');
    
    } else {
    
    entry.target.classList.remove('show');
    
    
    }
    
    });
    
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    
    hiddenElements.forEach((el) => observer.observe(el));