const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const closeListBtn = document.getElementById("close-list-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryName = document.querySelector(".category-name");
const categoryOptions = document.getElementById("category-dropdown");
const categoryList = document.getElementById("category-list");

function getBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (!Array.isArray(bookmarks)) return [];

    const validBookmarks = bookmarks.filter(
      (bookmark) =>
        bookmark &&
        typeof bookmark === "object" &&
        "name" in bookmark &&
        "category" in bookmark &&
        "url" in bookmark,
    );

    return validBookmarks;
  } catch {
    return [];
  }
}

function saveBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function renderBookmarks(category) {
  categoryName.innerText = category;
  const bookmarks = getBookmarks();

  const filteredBookmarks = bookmarks.filter((bookmark) => bookmark.category === category);

  if (filteredBookmarks.length > 0) {
    categoryList.innerHTML = "";

    filteredBookmarks.forEach(({ name, url }) => {
      categoryList.innerHTML += `
		<label for="${name}" style="display: flex; align-items: center; gap: 0.5em;">
		  <input type="radio" id="${name}" value="${name}" name="savedBookmark">
		  <a class="gen-link" href="${url}">${name}</a>
		</label>
      `;
    });
  } else {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  }
}

addBookmarkBtn.addEventListener("click", () => {
  categoryName.innerText = categoryOptions.value;
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkFormBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("name");
  const link = document.getElementById("url");

  const nameVal = name.value.trim();
  const urlVal = link.value.trim();
  const categoryVal = categoryOptions.value;

  if (!nameVal || !urlVal || !categoryVal) return;

  const bookmarks = getBookmarks();
  bookmarks.push({
    name: nameVal,
    category: categoryVal,
    url: urlVal,
  });
  saveBookmarks(bookmarks);
  name.value = "";
  link.value = "";
  displayOrCloseForm();
});

let currentCategory = "";
viewCategoryBtn.addEventListener("click", () => {
  currentCategory = categoryOptions.value;
  renderBookmarks(currentCategory);
  displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  const checkedRadio = document.querySelector('input[type="radio"]:checked');

  if (!checkedRadio) return;

  const updatedBookmarks = bookmarks.filter(
    (bookmark) => !(bookmark.name === checkedRadio.value && bookmark.category === currentCategory),
  );

  saveBookmarks(updatedBookmarks);
  renderBookmarks(currentCategory);
});
