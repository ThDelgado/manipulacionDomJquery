
$(document).ready(function () {

     // El código escrito acá se ejecutará luego de que se carguen los lementos de la página web

    //$("selectorPorEtiqueta"); // Retornará un arreglo con todos los componentes con la etiqueta correspondiente
    //$(".selectorPorClase"); // Retornará un arreglo con todos loscomponentes con la clase correspondiente
    //$("#selectorPorId"); // Retornará el primer elemento encontrado con el id correspondiente 

    $('#texto1').mouseenter(function () {
        $("#texto2").show();
    });

    $('#texto1').mouseout(function () { 
        $("#texto2").hide();
    });

    $("#img").click(function (){
        $("#img1").width("100%");
        
    });

    $("#caja2").mouseenter(function () {
        $("#img1").width("20%");
    });
});



