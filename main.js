/* $(document).ready(function(){ 

    //quando o documento html estiver pronto (ready) chamará a função

    console.log(document.querySelector('header button'))
    console.log($('#btn-cancel'))


    document.querySelector('header button').addEventListener('click', function(){

    }) 

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        console.log('submit');
        e.preventDefault();
    })
}) */

//jquery formato $(document) -- $('elemento'), enquanto querySelector seria document.querySelector('')

$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImageAdress = $('#new-image-adress').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${newImageAdress}" />`).appendTo(newItem); //insere o endereço dentro dos lis do new item
        $(`
            <div class="overlay-image-link">
                <a href="${newImageAdress}" target="_blank" title="View image in full size">
                    View image in full size
                </a>
            </div>
        `).appendTo(newItem);

        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000); //1000ms = 1 segundo
        
        $('#new-image-adress').val('');
    })
})




