const form = document.getElementById("form");
const usernamecl = document.getElementById("usernamecl");
const emailcl = document.getElementById("emailcl");
const passwordcl = document.getElementById("passwordcl");
const passwordConfirmationcl = document.getElementById("passwordConfirmationcl");
const cpfcl = document.getElementById("cpfcl");
const dataNasccl = document.getElementById("dataNasccl");
const telefonecl = document.getElementById("telefonecl");
const estadoCivilcl = document.getElementById("estadoCivilcl");


form.addEventListener("submit", (event) => {
    event.preventDefault();



    checkForm();///Usar para testar para cadastrar

})


function checkInputUsernamecl() {
    const usernameValue = usernamecl.value;

    if (usernameValue === "") {

        errorInput(usernamecl, "Preencha com um usuario valido")
    } else {
        const formItem = usernamecl.parentElement;
        formItem.classList = "formContent"
    }
}


function checkInputEmailcl() {
    const emailValue = emailcl.value;

    if (emailValue === "") {

        errorInput(emailcl, "Preencha com um email valido")
    } else {
        const formItem = emailcl.parentElement;
        formItem.className = "formContent"
    }
}


function checkInputPasswordcl() {
    const passwordValue = passwordcl.value;

    if (passwordValue === "") {

        errorInput(passwordcl, "Preencha com uma senha valido")
    } else if (passwordValue.length < 8) {
        errorInput(passwordcl, "A senha precisa ter no minimo 8 caracteres")

    } else {
        const formItem = passwordcl.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputPasswordConfirmationcl() {
    const passwordConfirmationValue = passwordConfirmationcl.value;
    const passwordValue = passwordcl.value;


    if (passwordConfirmationValue === "") {

        errorInput(passwordConfirmationcl, "Preencha com uma senha valido")
    } else if (passwordConfirmationValue !== passwordValue) {

        errorInput(passwordConfirmationcl, "Senhas não compativeis")
    } else {
        const formItem = passwordConfirmationcl.parentElement;
        formItem.className = "formContent"
    }


}

function checkInputCpfcl() {
    const cpfValue = cpfcl.value;

    if (cpfValue === "") {

        errorInput(cpfcl, "Preencha com um cpf")
    } else if (validarCPF(cpfValue) == false) {

        errorInput(cpfcl, "Cpf invalido")
    }
    else {
        const formItem = cpfcl.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputDataNasccl() {
    const dataNascValue = dataNasccl.value;

    if (dataNascValue === "") {

        errorInput(dataNasccl, "Preencha com sua data de nascimento")
    } else if (isOver18(dataNascValue) === false) {
        errorInput(dataNasccl, "Data de aniversario invalida: (-18)")

    }

    else {
        const formItem = dataNasccl.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputTelefonecl() {
    const telefoneValue = telefonecl.value;

    if (telefoneValue === "") {

        errorInput(telefonecl, "Preencha com um telefone valido")
    } else if (telefoneValue.length < 11) {

        errorInput(telefonecl, "Telefone inválido")

    }
    else {
        const formItem = telefonecl.parentElement;
        formItem.className = "formContent"
    }

}

function checkInputEstadoCivilcl() {
    const estadoCivilValue = estadoCivilcl.value;

    if (estadoCivilValue === "Selecione") {

        errorInput(estadoCivilcl, "Preencha com um telefone valido")
    } else {
        const formItem = estadoCivilcl.parentElement;
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