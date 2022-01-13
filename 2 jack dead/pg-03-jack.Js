function jack03() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Aguarda no ponto de encontro mais 10 min.\n2. Encontrar com Tito e Dena.\n3. Atirar para cima, para ver se eles respondem.');

        if (question == 1) {
            window.location.href = "pg-03-jack-gameover-n1.html";
            break;
        } else if (question == 2) {
            window.location.href = "../3 dena flores/pg-ini-dena.html";
            break;
        }
        else if (question == 3) {
            window.location.href = "pg-03-jack-gameover-n3.html";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}