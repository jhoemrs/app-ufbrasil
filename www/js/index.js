    var url = "http://127.0.0.1:8000/";
    var acron = null;
    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: url+"listar-estados",
            dataType: 'json',
            contentType: 'application/json',
            crossDomain: true,
            cache: false,
            success: function(data)
            {
                acron = data;
                $('#selecaoEstado').append("<option value=0> Não Selecionado </option>");
                $.each(data, function(i,estado){
                    item = "<option value=" + estado.id + ">" + estado.nome + "</option>";
                    $('#selecaoEstado').append(item);
                    //acron.push(estado.acronimo);
                });
            },
            error: function(jqXHR, textStatus, errorThrow){
                alert('Erro ao carregar os Estados');
            }
        });
});

$('#selecaoEstado').on('change', function() {    
    $.each(acron,function(x,acr){
        if( $('#selecaoEstado').val() == 0 ){
            $('#acronimoEstado').attr('placeholder','Não Selecionado');
        }
        else if( $('#selecaoEstado').val() == acr.id ){
            $('#acronimoEstado').attr('placeholder',acr.acronimo);
        }
    })
}); 

                    
