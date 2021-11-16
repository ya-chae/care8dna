$('.input-box').on('input', function() {
    if($(inputBox).val()==''){
        $(loginBtn).attr("disabled", true);
    } else {
        $(loginBtn).attr("disabled", false);
    }
});