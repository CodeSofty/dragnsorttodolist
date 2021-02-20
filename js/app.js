// if(localStorage.getItem('items')== undefined){
//     localStorage.setItem('items', JSON.stringify({max_id: 0, items: []}));
//     removeContent();
// }

//Add new item
$('.add-item-bttn').on("click", function() {
    $('#item-list').append('<td scope="row lead" id="items" contenteditable="true">Enter some text here</td>');
});

$('.add-cat-bttn').on("click", function() {
    $('#cat-list').append('<th class="category" scope="col" contenteditable="true" class="text-center" colspan="1"></th>');
});


$('.clear-all-bttn').on("click", function() {
    removeContent();
});

function removeContent() {
    $('#item-list td').remove();
    $('#cat-list th').remove();
}