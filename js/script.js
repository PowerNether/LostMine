$('.buyModal-link').on('click', function (e) {
    e.preventDefault;
    $(this).fadeToggle()
    $('.buyModal-promoInput').fadeToggle()
})
$('.consolepage-history').slick({
    rows: 3,
})