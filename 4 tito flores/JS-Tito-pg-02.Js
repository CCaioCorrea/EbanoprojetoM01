function tito02() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Atire no homem com sua Beretta.\n2. Atira na sua irmã antes que ela se transforme.\n3. Levanta rapidamente as mãos.');

        if (question == 1) {
            window.location.href = "pg-02-tito-gameover-n1.html";
            break;
        } else if (question == 2) {
            window.location.href = "pg-02-tito-gameover-n2.html";
            break;
        }
        else if (question == 3) {
            window.location.href = "pg-03-tito.html";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}