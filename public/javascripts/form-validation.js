(function ($) {
//Form Validation
    

    $(document).on('click', '#product-create-btn', function(e){
        e.preventDefault();
        $( "#product-create-form" ).validate( {
            messages: {
                productId: "Por favor insira a referência interna",
                customerproductId: "Por favor insira a referência do cliente",
                productName: "Por favor insira o nome do produto",
                nameInTheLabel: "Máximo de 24 Caracteres",
                clientname: "Por favor insira o nome do cliente",
            }
        } );
        if($("#product-create-form").valid()){
        }
    })

    $(document).on('click', '#product-edit-btn', function(e){
        e.preventDefault();
        $( "#product-edit-form" ).validate( {
            messages: {
                productId: "Por favor insira a referência interna",
                customerproductId: "Por favor insira a referência do cliente",
                productName: "Por favor insira o nome do produto",
                nameInTheLabel: "Máximo de 24 Caracteres",
                clientname: "Por favor insira o nome do cliente",
            }
        } );

        if($("#product-edit-form").valid()){

        }
    })

    $(document).on('click', '#client-create-button', function(e){
        e.preventDefault();
        $( "#create-client-form" ).validate( {
            messages: {
                clientname: "Por favor insira o nome do Cliente",
                firstaddress: "Por favor insira o endereço do Cliente",
                location: "Por favor insira a cidade do Cliente",
                postalcode: "Por favor insira o Código Postal do Cliente",
                country: "Por favor insira o País do Cliente"
            }
        } );
    });

    $(document).on('click', '#client-edit-button', function(e){
        e.preventDefault();
        $( "#client-edit-form" ).validate( {
            messages: {
                clientname: "Por favor insira o nome do Cliente",
                firstaddress: "Por favor insira o endereço do Cliente",
                location: "Por favor insira a cidade do Cliente",
                postalcode: "Por favor insira o Código Postal do Cliente",
                country: "Por favor insira o País do Cliente"
            }
        } );
    });

   
})(jQuery);