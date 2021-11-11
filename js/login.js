const loginForm = document.querySelector("#login-form");
const loginId = document.querySelector("#login-id");
const loginPw = document.querySelector("#login-pw");

$ (function(){
    $(input).on('input', function(){
        if($(input).val()=='')
            $(".login-btn").attr("disabled", true);
        else
            $(".login-btn").attr("disabled", false);
    });
})