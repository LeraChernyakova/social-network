$(document).ready(() => {
    $('.open-chats').on('click', function() {
        const userID = $(this).closest('tr').cells[0].textContent;
        $.get("/admin/chats", {body: userID})
            .done((data)=>{
                alert(data);
            })
    });
})