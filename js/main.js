$(document).ready(function() {
	
	/* Variables globales */
	/* Dias de la semana que se deshabilitan. ( 0 = Domingo, . . ., 6 = Sabado) */
	var dayDisabled = ["0"];
	/* Arreglo de fechas seleccionadas */
	var dates = "";
	/* Número de opción seleccionada */
	var button = 1;
	/* Formato de las fechas */
	var formato = "MM dd, yyyy";
	
	var modificarRange = false;
	
	$("#fechaInicio").hide();
	$("#fechaFin").hide();
	$("#btnAceptar").hide();
	
	$("#date").click(function(){
		$("#calendario").show();
		if(button==1){
			$("#btnEspecifica").trigger("click");	
		}else if(button==2){
			modificarRange = $("#fechaFin").val() != "" ? true : false;
			$("#btnRango").trigger("click");
		}else{
			$("#btnMultiple").trigger("click");
		}
	});
	
	$("#btnEspecifica").click(function(){
		button = 1;
		$(this).addClass("active");
		$("#btnRango").removeClass("active");
		$("#btnMultiple").removeClass("active");
		$("#btnAceptar").hide();
		$("#fechaInicio").hide();
		$("#fechaFin").hide();
		$('#sandbox-container2').hide();
		$('#sandbox-container3').hide();
		$('#sandbox-container1').show();
		$('#sandbox-container1').datepicker({
			weekStart: 0,
			format: formato,
			startDate: "today",
			language: "es",
			daysOfWeekDisabled: dayDisabled
		});
	});
	
	$("#btnRango").click(function() {
		button = 2;
		$(this).addClass("active");
		$("#btnEspecifica").removeClass("active");
		$("#btnMultiple").removeClass("active");
		$("#btnAceptar").show();
		$('#sandbox-container1').hide();
		$('#sandbox-container3').hide();
		$('#sandbox-container2').show();
		$('#sandbox-container2').datepicker({
			weekStart: 0,
			format: formato,
			startDate: "today",
			language: "es",
			daysOfWeekDisabled: dayDisabled,
			inputs: $('.actual_range')
		});
		$("#fechaInicio").show();
		$("#fechaFin").show()
		if(modificarRange){
			$("#fechaInicio").focus();
		}else{
			$("#fechaFin").focus();
		}
		
	});
	
	$("#btnMultiple").click(function(){
		button = 3;
		$(this).addClass("active");
		$("#btnEspecifica").removeClass("active");
		$("#btnRango").removeClass("active");
		$("#btnAceptar").show();
		$("#fechaInicio").hide();
		$("#fechaFin").hide();
		$('#sandbox-container1').hide();
		$('#sandbox-container2').hide();
		$('#sandbox-container3').show();
		$('#sandbox-container3').datepicker({
			weekStart: 0,
			format: formato,
			startDate: "today",
			language: "es",
			daysOfWeekDisabled: dayDisabled,
			multidate: true,
		});
	});
	
	$('#sandbox-container1').on('changeDate', function(e) {
		dates = $(this).datepicker('getFormattedDate')
		$("#date").html("<span>Date</span> - "+ dates +" <b class=\"caret\"></b>");
		$("#calendario").hide();
	});
	
	$('#sandbox-container3').on('changeDate', function(e) {
		dates = $(this).datepicker('getFormattedDate')
	});
	
	$("#btnAceptar").click(function(){
		if(button==2){
			$("#date").html("<span>Date</span> - " + $("#fechaInicio").val() + " - " + $("#fechaFin").val() + " <b class=\"caret\"></b>");
			dates = "";
			dates[0] = $("#fechaInicio").val();
			dates[1] = $("#fechaFin").val();
		}else{
			$("#date").html("<span>Date</span> - Fechas multiples <b class=\"caret\"></b>");
		}
		$("#calendario").hide();
	});
	
	$("#fechaInicio").change(function(){
		if(modificarRange){
			$("#fechaFin").focus();	
		}
	});
	
});
