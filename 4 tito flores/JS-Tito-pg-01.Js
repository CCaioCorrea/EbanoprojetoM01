function tito01() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Volta até Dena.\n2. Espera um pouco.\n3. Continua correndo!');

        if (question == 1) {
            window.location.href = "pg-02-tito.html";
            break;
        } else if (question == 2) {
            window.location.href = "pg-01-tito-gameover-n2.html";
            break;
        }
        else if (question == 3) {
            window.location.href = "pg-01-tito-gameover-n3.html";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}