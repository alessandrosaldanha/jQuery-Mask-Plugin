$(document).ready(function () {
    $("#phone").mask("(00) 0 0000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");

    $("form").validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            phone: { required: true },
            cpf: { required: true },
            endereco: { required: true },
            cep: { required: true },
        },
        messages: {
            nome: "Insira seu nome completo",
            email: "Insira um email válido",
            phone: "Insira um número de celular",
            cpf: "Coloque seu CPF",
            endereco: "Insira seu endereço completo",
            cep: "Insira o CEP de sua rua",
        },
    submitHandler: function (form) {
        alert(`Cadastro concluído com sucesso!`);
        nome.value = "";
        email.value = "";
        telefone.value = "";
        cpf.value = "";
        endereco.value = "";
        cep.value = "";
    },
    invalidHandler: function (evento, validador) {
        let erros = validador.numberOfInvalids();
        if (erros) {
            let mensagem = erros === 1 ? 'Existe 1 campo incorreto ou vazio.' : `Existem ${erros} campos incorretos ou vazios.`;
            
            // Remover mensagens de erro existentes, se houver
            $(".mensagem-erro").remove();
            
            // Adicionar mensagem de erro após o formulário
            $("<div class='mensagem-erro'></div>").text(mensagem).insertAfter("form");
            
            // Realçar campos inválidos com uma classe de estilo
            $("input.error").removeClass("error");
            $("input.error").addClass("error");
        }
    },
    });
});