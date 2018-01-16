$(document).ready(function () {
    // Api
    let apiPath = "http://localhost:8080/Gamify/api";
    let apiKey = sessionStorage.getItem("apiKey");

    let errors;

    var url = apiPath + "/users?apiKey=" + apiKey;
    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            users = data;

            if ($("#usersNumber") != undefined) {
                $("#usersNumber").text(users.length);
            }

            if ($("#tbodyUsers") != undefined) {
                $("#tbodyUsers").empty();
                let content;
                for (let i = 0; i < users.length; i++) {
                    const element = users[i];
                    content += "<tr><td>" + element.userID + "</td>" + "<td>" + element.email + "</td>" + "</tr>"
                }
                $("#tbodyUsers").append(content);
            }
        }
    })



});