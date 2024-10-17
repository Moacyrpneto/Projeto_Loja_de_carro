$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrow:true
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    /*let mascara = if (celular) ? (00) 0 0000-0000 : (00) 0000-0000*/ //

    $('#telefone').mask('(00) 0 0000-0000', {
        placeholder:'(__)_ ____-____'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veículoDeInteresse: {
                required: true
            },
            mensagem: {
                required: false
            }

        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'por favor, insira seu telefone',
            email: 'por favor, insira seu email'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

    $('.lista-de-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veículo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})