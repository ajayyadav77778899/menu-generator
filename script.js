
function addItem() {
    let container = document.createElement("div");
    container.classList.add("item-container");
    container.innerHTML = `
        <label>Item Name:</label>
        <select>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Carrot">Carrot</option>
        </select>
        <label>Item Quantity (KG):</label>
        <input type="number" min="1" placeholder="Enter quantity">
    `;
    document.getElementById("items-wrapper").appendChild(container);
}
