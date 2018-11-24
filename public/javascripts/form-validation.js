(function ($) {
//Form Validation

    function isFieldFilled() {
        return $('#nameInTheLabel').val().length > 0;
    }
    

    $(document).on('click', '#product-create-btn', function(e){
        e.preventDefault();
        console.log('form stopped');
        $( "#product-create-form" ).validate( {
            rules: {
                productId: "required",
                customerproductId: "required",
                
                productName: "required",
                nameInTheLabel: {
                    required: false,
                    maxlength: {
                        depends: isFieldFilled,
                        param: 24
                    }
                },
                clientname:{
                    required: true
                }
            },
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
            rules: {
                productId: "required",
                customerproductId: "required",
                
                productName: "required",
                nameInTheLabel: {
                    required: false,
                    maxlength: {
                        depends: isFieldFilled,
                        param: 24
                    }
                },
                clientname:{
                    required: true
                }
            },
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

   
})(jQuery);