// const form = document.getElementById('joinform');
// const submit = document.getElementById('submitButton');

// form.addEventListener('input', function () {
//   submitButton.disabled = !form.checkValidity();
// });

$(document).ready(() => {

    $("#form").submit((e) => {
        e.preventDefault();
        const formData = {
            name: $("#name").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
            date: $("#date").val()
        };
        console.log(formData);

        localStorage.setItem("formData", JSON.stringify(formData));
        $("#modalform").modal('hide');

        let firstname = formData.name.split(" ")[0];
        console.log(firstname);

        $("#name1").text(firstname);
        $("#displayName").text(formData.name);
        $("#displayPhone").text(formData.phone);
        $("#displayEmail").text(formData.email);
        $("#displaydate").text(formData.date);
        $("#confirm").css('display','block')
    });

    $("#confirmbtn").click(() => {
        $("#form").trigger("reset");
        $("#confirm").hide();
    });


})