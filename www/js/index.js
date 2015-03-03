    var url = "http://127.0.0.1:8000/";
    
    $(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: url+"listar-estados",
        dataType: 'json',
        contentType: 'application/json',
        crossDomain: true,
        cache: false,
        sucess: function(data)
        {
            $.each(data, function(i,estado){
                item = "<option value=" + estado.nome + ">" + estado.nome + "</option>";
                $('#selecaoEstado').append(item);
            });
        },
        error: function(jqXHR, textStatus, errorThrow){
            alert('Erro ao carregar os Estados');
        }
    });
});