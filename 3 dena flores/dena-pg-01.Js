function dena01() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Atira na cabeça.\n2. Atira no peito.\n3. Atira na patela.');

        if (question == 1) {
            window.location.href = "pg-01-dena-gameover-n1.html";
            break;
        } else if (question == 2) {
            window.location.href = "pg-01-dena-gameover-n2.html";
            break;
        }
        else if (question == 3) {
            window.location.href = "pg-02-dena.html";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}