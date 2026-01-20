const deptButtons = document.querySelectorAll(".departments button"); 
const content = document.querySelector(".content"); 
const deptSections = document.querySelectorAll(".department-section"); 

// Day navigation
const dayButtons = document.querySelectorAll("nav button");
const days = document.querySelectorAll(".day");

deptButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".departments").style.display = "none";
        document.querySelector(".initial-header").style.display = "none";
    document.querySelector(".initial-footer").style.display = "none";
    
    content.style.display = "block";

    const dept = btn.getAttribute("data-dept");
    deptSections.forEach(sec => {
      sec.style.display = sec.id === dept ? "block" : "none";
    });
  });
});

dayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    dayButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const dayId = btn.getAttribute("data-day");
    days.forEach((day) => {
      if (day.id === dayId) {
        day.classList.add("active");
      } else {
        day.classList.remove("active");
      }
    });
  });
});