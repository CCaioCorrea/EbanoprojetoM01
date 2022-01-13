function Jack01() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt('1. Corre!\n2. Atira neles, bem na cabeça!\n3. Tenta derrubá-los com o seu bastão.');

        if (question == 1) {
            window.location.href = "";
            break;
        } else if (question == 2) {
            window.location.href = "";
            break;
        }
        else if (question == 3) {
            window.location.href = "";
            break;
        }
        else {
            alert("Você precisa escolher uma opção válida.");
        }
    }
}