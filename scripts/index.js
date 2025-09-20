const initialCards = [
  { name: "Valle de Yosemite", link: "images/valle-yosemite.jpg" },
  { name: "Lago Louise", link: "images/lago-louise.png" },
  { name: "Montañas Calvas", link: "images/montanas-calvas.png" },
  { name: "Latemar", link: "images/latemar.png" },
  { name: "Parque Nacional de la Vanoise", link: "images/vanois-national.png" },
  { name: "Lago di Braies", link: "images/lago-di-braies.png" },
];

const cardsContainer = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#card-template");

const profileName = document.querySelector(".profile__name");
const profileNameText = document.querySelector(".profile__name-text");
const profileAbout = document.querySelector(".profile__about");
const editIconButton = document.querySelector(".profile__edit-icon");

const popupEdit = document.querySelector("#popup-edit");
const popupAdd = document.querySelector("#popup-add");
const popupImage = document.querySelector("#popup-image");

const profileForm = popupEdit.querySelector('form[name="profile-form"]');
const addCardForm = popupAdd.querySelector('form[name="add-card-form"]');

const imageEl = popupImage.querySelector(".popup__image");
const captionEl = popupImage.querySelector(".popup__caption");

const addCardOpenBtn = document.querySelector(".profile__add-button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
}
function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const opened = document.querySelector(".popup_opened");
    if (opened) closePopup(opened);
  }
}
document.querySelectorAll(".popup").forEach((p) => {
  p.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(p);
    }
  });
});

function createCard({ name, link }) {
  const card = cardTemplate.content.querySelector(".card").cloneNode(true);
  const img = card.querySelector(".card__image");
  const title = card.querySelector(".card__title");
  const likeBtn = card.querySelector(".card__like");
  const deleteBtn = card.querySelector(".card__delete");

  img.src = link;
  img.alt = name;
  title.textContent = name;

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like_active");
  });

  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      card.remove();
    });
  }

  img.addEventListener("click", () => {
    openImagePopup(name, link);
  });

  return card;
}

function openImagePopup(name, link) {
  imageEl.src = link;
  imageEl.alt = name;
  captionEl.textContent = name;
  openPopup(popupImage);
}

initialCards.forEach((data) => {
  cardsContainer.append(createCard(data));
});

if (editIconButton) {
  editIconButton.addEventListener("click", () => {
    profileForm.elements["name"].value = profileNameText.textContent.trim();
    profileForm.elements["about"].value = profileAbout.textContent.trim();
    openPopup(popupEdit);
  });
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = profileForm.elements["name"];
  const aboutInput = profileForm.elements["about"];

  profileNameText.textContent = nameInput.value.trim();
  profileAbout.textContent = aboutInput.value.trim();

  closePopup(popupEdit);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

addCardOpenBtn.addEventListener("click", () => {
  addCardForm.reset();
  openPopup(popupAdd);
});

addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const title = addCardForm.elements["title"].value.trim();
  const link = addCardForm.elements["link"].value.trim();
  if (!title || !link) return;
  const card = createCard({ name: title, link });
  cardsContainer.prepend(card);
  closePopup(popupAdd);
});

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});
