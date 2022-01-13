function dena03() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Você aguarda tito se afastar e atira.\n2. Você aguarda Tito se afastar mas não tem coragem para atirar em si mesma.\n3. Você atira logo após Tito se virar.');

        if (question == 1) {
            window.location.href = "pg-03-dena-gameover-n1.html";
            break;
        } else if (question == 2) {
            window.location.href = "../4 tito flores/pg-ini-tito.html";
            break;
        }
        else if (question == 3) {
            window.location.href = "pg-03-dena-gameover-n3.html";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}