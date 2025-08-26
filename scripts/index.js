const popup = document.querySelector("#popup-edit");
const openBtn = document.querySelector(".profile__edit-button");
const nameIconBtn = document.querySelector(".profile__edit-icon");
const closeBtn = popup.querySelector(".popup__close");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const form = popup.querySelector(".form");
const nameInput = form.querySelector(".form__input_type_name");
const aboutInput = form.querySelector(".form__input_type_about");

function openPopup(p) {
  p.classList.add("popup_opened");
}
function closePopup(p) {
  p.classList.remove("popup_opened");
}

function handleOpenEdit() {
  const currentName = profileName.textContent.trim();
  nameInput.value = currentName;
  aboutInput.value = profileAbout.textContent.trim();
  openPopup(popup);
}

closeBtn.addEventListener("click", () => closePopup(popup));

if (openBtn) {
  openBtn.addEventListener("click", handleOpenEdit);
}
if (nameIconBtn) {
  nameIconBtn.addEventListener("click", handleOpenEdit);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const iconBtn = document.querySelector(".profile__edit-icon");
  profileName.textContent = nameInput.value;
  if (iconBtn) profileName.appendChild(iconBtn);

  profileAbout.textContent = aboutInput.value;

  closePopup(popup);
}
form.addEventListener("submit", handleProfileFormSubmit);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popup.classList.contains("popup_opened")) {
    closePopup(popup);
  }
});

popup.addEventListener("mousedown", (e) => {
  if (e.target === popup && popup.classList.contains("popup_opened")) {
    closePopup(popup);
  }
});
