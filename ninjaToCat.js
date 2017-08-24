$('.cat').hover(function() {
    console.log ('hovering')
    $(this).attr('src', $(this).attr('data-alt-src'))
})
