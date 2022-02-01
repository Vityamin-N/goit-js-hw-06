const listRef = {
    categories: document.querySelectorAll(".item"),
};

console.log("Number of categories: ", listRef.categories.length);
for(const category of listRef.categories){
    const listTitle = category.firstElementChild;
    const listItems = category.lastElementChild.children;
    console.log("Category: ", listTitle.textContent);
    console.log("Element: ", listItems.length);
}