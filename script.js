/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const submitField = document.querySelector('#input');
const container = document.querySelector('#items');

function addShopingList() {
    const shoppingListUser = submitField.value;

    const listItem = document.createElement('div');
    listItem.classList.add('item');
    listItem.textContent = shoppingListUser;

    listItem.addEventListener('click', function () {
        listItem.classList.toggle('done');
    });

    if (shoppingListUser != '') {
        container.append(listItem);
    }

    submitField.value = '';
}

function sendByKey(event) {
    if (event.key == 'Enter') {
        addShopingList();
    }
}

submitField.addEventListener('keydown', sendByKey);
