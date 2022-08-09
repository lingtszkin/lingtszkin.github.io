$(function(){
    function calculate(){
        cost = Number($("#cost").val());
        current = Number($("#current").val());
        pre_cost = Number($("#pre_cost").val());
        premium = Number($("#premium").val());

        result = current - cost - pre_cost + premium;
        if (result >= 0) {
            $("#result").addClass("gain");
            $("#result").removeClass("loss");
        } else {
            $("#result").removeClass("gain");
            $("#result").addClass("loss");
        }
        $("#result").html(result);
    }
    calculate();
    $("#cost, #current, #premium").on("input", function(){
        calculate();
    })
});