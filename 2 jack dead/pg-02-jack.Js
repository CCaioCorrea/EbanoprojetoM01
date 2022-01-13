function jack02() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Atira sem pensar duas vezes!\n2. Corre!\n3. Fica imóvel e aguarda a reação do Corredor.');

        if (question == 1) {
            window.location.href = "pg-02-jack-gameover-n1.html";
            break;
        } else if (question == 2) {
            window.location.href = "pg-02-jack-gameover-n2.html";
            break;
        }
        else if (question == 3) {
            window.location.href = "pg-03-jack.html";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}