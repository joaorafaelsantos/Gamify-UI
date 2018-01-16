$(document).ready(function () { // Login 
    $("#btnLogin").click(function () {
        let apiPath = "http://localhost:8080/Gamify/api";
        let username = $("#txtUsername").val();
        let password = $("#txtPassword").val();


        var form_data = {
            username: username,
            password: password
        }
        var url = apiPath + "/auth"
        $.ajax({
            url: url,
            type: "POST",
            data: form_data,
            success: function (data) {
                sessionStorage.setItem('apiKey', data);
                apiKey = sessionStorage.getItem("apiKey");
                window.location.href = "../pages/home.html";
            }
        })
    });
});