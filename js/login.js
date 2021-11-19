// pc 로그인 화면 > navi-logo 선택 시 index 메인 화면으로 이동



// id, pw input-box에 모두 입력 시 로그인 버튼 활성화
$('.input-box').on('input', function() {
    if($('#login-input-id').val()=='' || $('#login-input-pw').val()==''){
        $('.login-btn').attr("disabled", true);
    } else {
        $('.login-btn').attr("disabled", false);
    }
});