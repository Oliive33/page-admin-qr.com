// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll("#sidebar .side-dropdown");
const sidebar = document.getElementById("sidebar");

allDropdown.forEach((item) => {
  const a = item.parentElement.querySelector("a:first-child");
  a.addEventListener("click", function (e) {
    e.preventDefault();

    if (!this.classList.contains("active")) {
      allDropdown.forEach((i) => {
        const aLink = i.parentElement.querySelector("a:first-child");

        aLink.classList.remove("active");
        i.classList.remove("show");
      });
    }

    this.classList.toggle("active");
    item.classList.toggle("show");
  });
});

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector("nav .toggle-sidebar");
const allSideDivider = document.querySelectorAll("#sidebar .divider");

if (sidebar.classList.contains("hide")) {
  allSideDivider.forEach((item) => {
    item.textContent = "-";
  });
  allDropdown.forEach((item) => {
    const a = item.parentElement.querySelector("a:first-child");
    a.classList.remove("active");
    item.classList.remove("show");
  });
} else {
  allSideDivider.forEach((item) => {
    item.textContent = item.dataset.text;
  });
}

toggleSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");

  if (sidebar.classList.contains("hide")) {
    allSideDivider.forEach((item) => {
      item.textContent = "-";
    });

    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
  } else {
    allSideDivider.forEach((item) => {
      item.textContent = item.dataset.text;
    });
  }
});

sidebar.addEventListener("mouseleave", function () {
  if (this.classList.contains("hide")) {
    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
    allSideDivider.forEach((item) => {
      item.textContent = "-";
    });
  }
});

sidebar.addEventListener("mouseenter", function () {
  if (this.classList.contains("hide")) {
    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
    allSideDivider.forEach((item) => {
      item.textContent = item.dataset.text;
    });
  }
});

// PROFILE DROPDOWN
const profile = document.querySelector("nav .profile");
const imgProfile = profile.querySelector("img");
const dropdownProfile = profile.querySelector(".profile-link");

imgProfile.addEventListener("click", function () {
  dropdownProfile.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (e.target !== imgProfile) {
    if (e.target !== dropdownProfile) {
      if (dropdownProfile.classList.contains("show")) {
        dropdownProfile.classList.remove("show");
      }
    }
  }
});

// Custom input file
const wrapper = document.querySelector(".wrapper-photo");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector("img");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive() {
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      img.src = result;
      wrapper.classList.add("active");
    };
    cancelBtn.addEventListener("click", function () {
      img.src = "";
      wrapper.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
  }
});
//Apparition Pop up big background
let BackgroundBtn = document.querySelector("#background-btn");
let loginBackground = document.querySelector(".login-background-container");
let formBackgroundClose = document.querySelector("#form-background-close");

window.onscroll = () => {
  loginBackground.classList.remove("active");
};
BackgroundBtn.addEventListener("click", () => {
  loginBackground.classList.add("active");
});

formBackgroundClose.addEventListener("click", () => {
  loginBackground.classList.remove("active");
});

//Apparition Pop up police
let LangBtn = document.querySelector("#polices-btn");
let loginLang = document.querySelector(".login-police-container");
let formPoliceClose = document.querySelector("#form-police-close");

window.onscroll = () => {
  loginLang.classList.remove("active");
};
LangBtn.addEventListener("click", () => {
  loginLang.classList.add("active");
});

formPoliceClose.addEventListener("click", () => {
  loginLang.classList.remove("active");
});
// Modif file

const imgDivProfil = document.querySelector(".profile-pic-div");
const imgPhoto = document.querySelector("#photo-profil");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

//Quand on passe au hover

imgDivProfil.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "block";
});

//Quand on passe au hover

imgDivProfil.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});
//Quand on choisit une photo to upload

file.addEventListener("change", function () {
  //this refers to file
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      imgPhoto.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});
