﻿document.addEventListener("DOMContentLoaded", () => {
    var href = window.location.href;

    var btnToLogin = document.querySelector(".btnToLogin")
    btnToLogin.addEventListener("click", () => {
        href = document.location.origin + "/account/Login"
        document.location = href
        href = window.location.origin
    });

    var btnToRegistration = document.querySelector(".btnToRegistration")
    btnToRegistration.addEventListener("click", () => {
        href = document.location.origin + "/account/Register"
        document.location = href
        href = window.location.origin
    })

    console.log("Что за хуйня блятьььь!!")
});
