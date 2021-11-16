const inputBox = document.querySelector(".input-box");
const loginBtn = document.querySelector(".login-btn");

$(inputBox).on('input', function() {
    if($(inputBox).val()==''){
        $(loginBtn).attr("disabled", true);
    } else {
        $(loginBtn).attr("disabled", false);
    }
})