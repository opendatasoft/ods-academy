const arrangeCoursesInSection = () => {
  const courses = document.querySelectorAll(".coursebox-container");
  const titles = document.querySelectorAll("h2");
  const path = document.location.pathname.split("/path/")[1];

  [...titles].forEach(title => {
    title.insertAdjacentHTML("afterend", `<div class="path-courses-row"><div>`);
  });

  [...courses].forEach(course => {
    const tags = course.dataset.tags.split(",");
    const pathTag = tags.find(tag => tag.includes(path));
    const section = pathTag && pathTag.split(path)[1];
    const node = section && [...titles].find(title => title.id === section);
    node && node.nextSibling.insertBefore(course, null);
  });
};

arrangeCoursesInSection();
