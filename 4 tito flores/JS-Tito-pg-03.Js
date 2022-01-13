function tito03() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Atira na direção da voz sem pestanejar. \n2. Atira na sua irmã antes que ela se transforme.\n3. Olhe para a direção da voz.');

        if (question == 1) {
            window.location.href = "pg-03-tito-gameover-n1.html";
            break;
        } else if (question == 2) {
            window.location.href = "pg-03-tito-gameover-n2.html";
            break;
        }
        else if (question == 3) {
            window.location.href = "../5 pagina final/pg-Final.html";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}