$(document).ready(function(){
    const students = [
        { name: "Vansh", reg: "12206797", roomN:"A-519" },
        { name: "Aman", reg: "12206798", roomN:"B-210" },
        { name: "Tarun", reg: "12206799", roomN:"C-430"}
    ];

    $("#frm-login").submit(function(e) {
        e.preventDefault();
        
        const regNumber = $("#reg-number").val();
        let found = false;

        for (let i = 0; i < students.length; i++) {
            if (students[i].reg === regNumber) {
                found = true;
                window.location.href = "contact.html";
                break;
            }
        }

        if (!found) {
            alert("Invalid registration number. Please try again.");
        }
    });
});
// script.js
$(document).ready(function(){
    $("#show-signup").click(function(){
        $("#login").hide();
        $("#signup").show();
    });

    $("#hide-signup").click(function(){
        $("#signup").hide();
        $("#login").show();
    });
});

