const openNewItemModalButton = document.getElementById("open-newitemmodal-button")
const newItemModal = document.getElementsByClassName("add-newitem")[0]
const closeNewItemModalButton = document.getElementById("close-newitemmodal-button")
const itemNameInput = document.getElementById("item-input-name")
const itemValueInput = document.getElementById("item-input-number")
const itemImgInput = document.getElementById("item-img-input")
const confirmNewItem = document.getElementsByClassName("finish-button")[0]
const itemsParent = document.getElementsByClassName("items")[0]

let itemList = [];
confirmNewItem.onclick = function () {
    const itemName = itemNameInput.value;
    const itemValue = parseInt(itemValueInput.value)
   
    const file = itemImgInput.files[0];
   
    const fileReader = new FileReader();
    fileReader.onload = function(){
       
        itemList.push({
            name: itemName,
            value: itemValue,
            img: this.result
        });
        setItems(itemList)
        itemNameInput.value = ``
        itemValueInput.value = ``
        itemImgInput.value = ``
        newItemModal.setAttribute("class", "add-newitem hide");

    };
    fileReader.readAsDataURL(file);
};

function setItems(items){


    const currentItems = document.getElementsByClassName("item");
    for (let i = 0; i < currentItems.length; i++){
        itemsParent.removeChild(currentItems[i]);
    }
    for(let i = 0; i<items.length; i++){
        let itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","item");
        let itemChildDiv = document.createElement("div");
        let itemImg = document.createElement("img");
        itemImg.setAttribute("src", items[i].img);
        let itemH3 = document.createElement("h3");
        itemH3.innerText = items[i].name;
        let itemBtn = document.createElement("button");
        itemBtn.innerText = `${items[i].value}円`;
        itemChildDiv.appendChild(itemImg);
        itemChildDiv.appendChild(itemH3);
        itemChildDiv.appendChild(itemBtn);
        itemDiv.appendChild(itemChildDiv);
        itemsParent.appendChild(itemDiv);
    }
}



openNewItemModalButton.onclick = function () {
    newItemModal.setAttribute("class", "add-newitem");
}

closeNewItemModalButton.onclick = function () {
    newItemModal.setAttribute("class", "add-newitem hide");
}