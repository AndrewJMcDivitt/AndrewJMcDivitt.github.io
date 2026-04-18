const filter = document.getElementById("filter");
const projects = document.querySelectorAll(".project-card");

filter.addEventListener("change", function () {
    const value = filter.value;

    projects.forEach(project => {
        if (value === "all" || project.dataset.category === value) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
});