/*  _________________  _________________  _________________ */
/* _________________INDEX.HTML _________________ */
/*  _________________  _________________  _________________ sasa*/


document.addEventListener("DOMContentLoaded", function () { //перевірка чи повністю загружена сторінка
  function createObserver(elementId, animationClass) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass); //animationClass береться з подкапотки
          observer.unobserve(entry.target);
        }
      });
    });

    const element = document.getElementById(elementId);
    if (element) { //якщо знайдено, то
      observer.observe(element);
    }
  }

  // Використання функції для кожного елемента
  createObserver("limit-line-skils", "extension-skils"); // тут айдішка і animationClass який буде додаватись
  createObserver("limit-line-projects", "extension-projects");
  createObserver("limit-line-about", "extension-about");
  createObserver("limit-line-contacts", "extension-contacts");
});


AOS.init({
  once: true
});