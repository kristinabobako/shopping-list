/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

//поле ввода списка покупок
const submitFiled = document.querySelector('#input');
//место, где будет храниться список покупок
const container = document.querySelector('#items');

function addShopingList() {
    //здесь будет храниться список, кот. ввел пользователь в input
    const shoppingListUser = submitFiled.value;

    const listItem = document.createElement('div');
    listItem.classList.add('item');
    listItem.textContent = shoppingListUser;

    if (shoppingListUser != '') {
        container.append(listItem);
    }

    submitFiled.value = '';
}

function sendByKey(event) {
    if (event.key == 'Enter') {
        addShopingList();
    }
}

submitFiled.addEventListener('keydown', sendByKey);


