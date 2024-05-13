const section = document.querySelectorAll(".section");

function SetSectionVisibility(passedValue) {
    section.forEach(sectionChild => {
        let value = sectionChild.getAttribute("value");
        if (value == passedValue) {
            sectionChild.classList.remove("hidden");
        } else {
            sectionChild.classList.add("hidden");
        }
    });
}