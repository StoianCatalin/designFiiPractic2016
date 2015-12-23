$(document).on('click', '.formInscriere .submit', function() {
    if (!$('.formInscriere').children('.error').length) {
        $(this).addClass('loading');
        console.log('trimite request ------->');
    }
});
$(document).on('click', '.loginIndividual .submit', function() {
    if (!$('.loginIndividual').children('.error').length) {
        $(this).addClass('loading');
        console.log('trimite request ------->');
    }
});
$(document).on('click', '.registerIndividual .submit', function() {
    if (!$('.registerIndividual').children('.error').length) {
        $(this).addClass('loading');
        console.log('trimite request ------->');
    }
});
$(document).on('click', '.participaTraining', function() {
        $(this).addClass('loading');
        console.log('trimite request ------->');
});




//ADMIN REQUESTS! -----------------------------------------------------------------------------------------


$(document).on('click', '.stergeTrainButt', function() {
    var idTraining = $(this).attr('data-id');
    $('.stergeTraining')
        .modal({
            closable  : false,
            onDeny    : function(){
                return false;
            },
            onApprove : function() {
                //Se face request post catre server.
                console.log("Se sterge " + idTraining);
            }
        })
        .modal('show');
});
$(document).on('click', '.aproabaParticipant', function() {
    var id = $(this).attr('data-id');
    $(this).parent().parent().addClass('animated zoomOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).remove();
    });
    //Request post catre server.
});
$(document).on('click', '.respingeParticipant', function() {
    var id = $(this).attr('data-id');
    $(this).parent().parent().addClass('animated zoomOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).remove();
    });
    //Request post catre server.
});
$(document).on('click', '.maiTraziu', function() {
    var id = $(this).attr('data-id');
    $(this).parent().parent().addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).remove();
    });
    //Request post catre server.
});
var idIntrebari = 1;
$(document).on('click', '.adaugaIntrebare', function() {
    idIntrebari++;
    $('.intrebariFields').append('<div class="field"><label>Intrebare '+ idIntrebari +'</label><input placeholder="Intrebare '+ idIntrebari +'" type="text"></div><div class="clearfloat"></div>');
});
