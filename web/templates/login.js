function getData(){
        $('#loading').show();
        $('#ok').hide();
        $('#fail').hide();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                //$('#action').html(response['statusText']);
            },
            error: function(response){
                //alert(JSON.stringify(response));
                //$('#action').html(response['statusText']);
                if(response['status']==401){
                    $('#loading').hide();
                    $('#fail').show();
                }else{
                    $('#loading').hide();
                    $('#ok').show();
                }
            }
        });
    }