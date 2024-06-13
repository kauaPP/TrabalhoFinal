const form = document.getElementById("form");
const usernameaco = document.getElementById("usernameac");
const emailac = document.getElementById("emailac");
const passwordac = document.getElementById("passwordac");
const passwordConfirmationac = document.getElementById("passwordConfirmationac");
const cpfac = document.getElementById("cpfac");
const dataNascac = document.getElementById("dataNascac");
const telefoneac = document.getElementById("telefoneac");
const estadoCivilac = document.getElementById("estadoCivilac");
const descricaoac = document.getElementById("descricaoac");



form.addEventListener("submit", (event) => {
    event.preventDefault();



    checkForm();///Usar para testar para cadastrar

})


function checkInputUsernamecl() {
    const usernameValue = usernameaco.value;

    if (usernameValue === "") {

        errorInput(usernameaco, "Preencha com um usuario valido")
    } else {
        const formItem = usernameaco.parentElement;
        formItem.classList = "formContent"
    }
}


function checkInputEmailcl() {
    const emailValue = emailac.value;

    if (emailValue === "") {

        errorInput(emailac, "Preencha com um email valido")
    } else {
        const formItem = emailac.parentElement;
        formItem.className = "formContent"
    }
}


function checkInputPasswordcl() {
    const passwordValue = passwordac.value;

    if (passwordValue === "") {

        errorInput(passwordac, "Preencha com uma senha valido")
    } else if (passwordValue.length < 8) {
        errorInput(passwordac, "A senha precisa ter no minimo 8 caracteres")

    } else {
        const formItem = passwordac.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputPasswordConfirmationcl() {
    const passwordConfirmationValue = passwordConfirmationac.value;
    const passwordValue = passwordac.value;


    if (passwordConfirmationValue === "") {

        errorInput(passwordConfirmationac, "Preencha com uma senha valido")
    } else if (passwordConfirmationValue !== passwordValue) {

        errorInput(passwordConfirmationac, "Senhas não compativeis")
    } else {
        const formItem = passwordConfirmationac.parentElement;
        formItem.className = "formContent"
    }


}

function checkInputCpfcl() {
    const cpfValue = cpfac.value;

    if (cpfValue === "") {

        errorInput(cpfac, "Preencha com um cpf")
    } else if (validarCPF(cpfValue) == false) {

        errorInput(cpfac, "Cpf invalido")
    }
    else {
        const formItem = cpfac.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputDataNasccl() {
    const dataNascValue = dataNascac.value;

    if (dataNascValue === "") {

        errorInput(dataNascac, "Preencha com sua data de nascimento")
    } else if (isOver18(dataNascValue) === false) {
        errorInput(dataNascac, "Data de aniversario invalida: (-18)")

    }

    else {
        const formItem = dataNascac.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputTelefonecl() {
    const telefoneValue = telefoneac.value;

    if (telefoneValue === "") {

        errorInput(telefoneac, "Preencha com um telefone valido")
    } else if (telefoneValue.length < 11) {

        errorInput(telefoneac, "Telefone inválido")

    }
    else {
        const formItem = telefoneac.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputDescricaocl() {
    const descricaoValue = descricaoac.value;

    if (descricaoValue === "") {

        errorInput(descricaoac, "Preencha com um telefone valido")
    } 
    else {
        const formItem = descricaoac.parentElement;
        formItem.className = "formContent"
    }

}


function checkInputEstadoCivilcl() {
    const estadoCivilValue = estadoCivilac.value;

    if (estadoCivilValue === "Selecione") {

        errorInput(estadoCivilac, "Preencha com um telefone valido")
    } else {
        const formItem = estadoCivilac.parentElement;
        formItem.className = "formContent"
    }

}



function checkForm() {
    checkInputUsernamecl();
    checkInputEmailcl();
    checkInputPasswordcl();
    checkInputPasswordConfirmationcl();
    checkInputCpfcl();
    checkInputDataNasccl();
    checkInputTelefonecl();
    checkInputEstadoCivilcl();
    checkInputDescricaocl();

    const formItem = form.querySelectorAll(".formContent")
    const isValid = [...formItem].every((item) => {
        return item.className === "formContent"

    });

    if (isValid) {
        alert("Cadastrado com sucesso")
    }

}





function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "formContent error"

}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

function isOver18(birthDateString) {
    // Separando os componentes da data
    const [day, month, year] = birthDateString.split('/').map(Number);

    // Criando uma data a partir dos componentes
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Ajustando a idade se o mês ou o dia ainda não foram completados no ano atual
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age >= 18;
}