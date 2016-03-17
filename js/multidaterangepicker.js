(function(factory){
  if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
  } else if (typeof exports === 'object') {
      factory(require('jquery'));
  } else {
      factory(jQuery);
  }
}(function($, undefined){
  var dates = "";
  var options
  $.fn.multidaterangepicker = function(options) {
    this.options = options
  };

  var multidaterangepickerElement = function(){

    var divOptions = $('<div class="mdpr-options"></div>')
    var btnSingle = $('<button id="mdpr-btnSingle" class="mdpr-btn" >Single Date</button>');
    var btnRange = $('<button id="mdpr-btnRange" class="mdpr-btn">Range Date</button>');
    var btnMultiple = $('<button id="mdpr-btnMultiple" class="mdpr-btn">Multiple Dates</button>');
    var inputStartDate = $('<input type="button" id="mdpr-startDate" class="mdpr-range mdpr-form-control" placeholder="Start Date"></label>');
    var inputEndDate = $('<input type="button" id="mdpr-endDate" class="mdpr-range mdpr-form-control" placeholder="End Date"></label>');
    var btnAccept = $('<button class="mdpr-btn mdpr-accept" id="mdpr-btnAccept">Accept</button>');
    var divSingle = $('<div id="mdpr-container-single"></div>');
    var divRange = $('<div id="mdpr-container-range"></div>');
    var divMultiple = $('<div id="mdpr-container-multiple"></div>');
    
    var dates = "";
    var button = 1;
    
    var modificarRange = false;

    var settings = $.extend({
      autoclose: false,
      beforeShowDay: $.noop,
      beforeShowMonth: $.noop,
      beforeShowYear: $.noop,
      calendarWeeks: false,
      clearBtn: false,
      toggleActive: false,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: Infinity,
      forceParse: true,
      format: 'mm/dd/yyyy',
      keyboardNavigation: true,
      language: 'en',
      minViewMode: 0,
      maxViewMode: 2,
      orientation: "auto",
      rtl: false,
      startDate: -Infinity,
      startView: 0,
      todayBtn: false,
      todayHighlight: false,
      weekStart: 0,
      disableTouchKeyboard: false,
      enableOnReadonly: true,
      showOnFocus: true,
      zIndexOffset: 10,
      container: 'body',
      immediateUpdates: false,
      title: ''
    }, options);

    divOptions.append(btnSingle);
    divOptions.append(btnRange);
    divOptions.append(btnMultiple);
    divOptions.append(inputStartDate);
    divOptions.append(inputEndDate);
    divOptions.append(btnAccept);
    this.append(divOptions);
    this.append(divSingle);
    this.append(divRange);
    this.append(divMultiple);

    btnSingle.click(function(){
      button = 1;
      $(this).addClass("mdpr-active");
      btnRange.removeClass("mdpr-active");
      btnMultiple.removeClass("mdpr-active");
      btnAccept.hide();
      inputStartDate.hide();
      inputEndDate.hide();
      divRange.hide();
      divMultiple.hide();
      divSingle.show();
      divSingle.datepicker({
        autoclose: settings.autoclose,
        beforeShowDay: settings.beforeShowDay,
        beforeShowMonth: settings.beforeShowMonth,
        beforeShowYear: settings.beforeShowYear,
        calendarWeeks: settings.calendarWeeks,
        clearBtn: settings.clearBtn,
        toggleActive: settings.toggleActive,
        daysOfWeekDisabled: settings.daysOfWeekDisabled,
        daysOfWeekHighlighted: settings.daysOfWeekHighlighted,
        datesDisabled: settings.datesDisabled,
        endDate: settings.endDate,
        forceParse: settings.forceParse,
        format: settings.format,
        keyboardNavigation: settings.keyboardNavigation,
        language: settings.language,
        minViewMode: settings.minViewMode,
        maxViewMode: settings.maxViewMode,
        orientation: settings.orientation,
        rtl: settings.rtl,
        startDate: settings.startDate,
        startView: settings.startView,
        todayBtn: settings.todayBtn,
        todayHighlight: settings.todayHighlight,
        weekStart: settings.weekStart,
        disableTouchKeyboard: settings.disableTouchKeyboard,
        enableOnReadonly: settings.enableOnReadonly,
        showOnFocus: settings.showOnFocus,
        zIndexOffset: settings.zIndexOffset,
        container: settings.container,
        immediateUpdates: settings.immediateUpdates,
        title: settings.title
      });
    });

    btnRange.click(function() {
      button = 2;
      $(this).addClass("mdpr-active");
      btnSingle.removeClass("mdpr-active");
      btnMultiple.removeClass("mdpr-active");
      btnAccept.show();
      divSingle.hide();
      divMultiple.hide();
      divRange.show();
      divRange.datepicker({
        autoclose: settings.autoclose,
        beforeShowDay: settings.beforeShowDay,
        beforeShowMonth: settings.beforeShowMonth,
        beforeShowYear: settings.beforeShowYear,
        calendarWeeks: settings.calendarWeeks,
        clearBtn: settings.clearBtn,
        toggleActive: settings.toggleActive,
        daysOfWeekDisabled: settings.daysOfWeekDisabled,
        daysOfWeekHighlighted: settings.daysOfWeekHighlighted,
        datesDisabled: settings.datesDisabled,
        endDate: settings.endDate,
        forceParse: settings.forceParse,
        format: settings.format,
        keyboardNavigation: settings.keyboardNavigation,
        language: settings.language,
        minViewMode: settings.minViewMode,
        maxViewMode: settings.maxViewMode,
        orientation: settings.orientation,
        rtl: settings.rtl,
        startDate: settings.startDate,
        startView: settings.startView,
        todayBtn: settings.todayBtn,
        todayHighlight: settings.todayHighlight,
        weekStart: settings.weekStart,
        disableTouchKeyboard: settings.disableTouchKeyboard,
        enableOnReadonly: settings.enableOnReadonly,
        showOnFocus: settings.showOnFocus,
        zIndexOffset: settings.zIndexOffset,
        container: settings.container,
        immediateUpdates: settings.immediateUpdates,
        title: settings.title,
        inputs: $('.mdpr-range')
      });
      inputStartDate.show();
      inputEndDate.show()
      if(modificarRange){
        inputStartDate.focus();
      }else{
        inputEndDate.focus();
      }
      
    });
    
    btnMultiple.click(function(){
      button = 3;
      $(this).addClass("mdpr-active");
      btnSingle.removeClass("mdpr-active");
      btnRange.removeClass("mdpr-active");
      btnAccept.show();
      inputStartDate.hide();
      inputEndDate.hide();
      divSingle.hide();
      divRange.hide();
      divMultiple.show();
      divMultiple.datepicker({
        autoclose: settings.autoclose,
        beforeShowDay: settings.beforeShowDay,
        beforeShowMonth: settings.beforeShowMonth,
        beforeShowYear: settings.beforeShowYear,
        calendarWeeks: settings.calendarWeeks,
        clearBtn: settings.clearBtn,
        toggleActive: settings.toggleActive,
        daysOfWeekDisabled: settings.daysOfWeekDisabled,
        daysOfWeekHighlighted: settings.daysOfWeekHighlighted,
        datesDisabled: settings.datesDisabled,
        endDate: settings.endDate,
        forceParse: settings.forceParse,
        format: settings.format,
        keyboardNavigation: settings.keyboardNavigation,
        language: settings.language,
        minViewMode: settings.minViewMode,
        maxViewMode: settings.maxViewMode,
        multidate: true,
        orientation: settings.orientation,
        rtl: settings.rtl,
        startDate: settings.startDate,
        startView: settings.startView,
        todayBtn: settings.todayBtn,
        todayHighlight: settings.todayHighlight,
        weekStart: settings.weekStart,
        disableTouchKeyboard: settings.disableTouchKeyboard,
        enableOnReadonly: settings.enableOnReadonly,
        showOnFocus: settings.showOnFocus,
        zIndexOffset: settings.zIndexOffset,
        container: settings.container,
        immediateUpdates: settings.immediateUpdates,
        title: settings.title
      });
    });

    var changeDate = function () {
     
    }

    divSingle.on("changeDate", function(e) {
      $(this).parent().removeClass("mdpr-dropdown");
      $(this).parent().html("");
      $(this).trigger("getDates",e);
    });

    divMultiple.on("changeDate", function(e) {
      $(this).trigger("getDates",e);
    });

    btnSingle.trigger("click");

    this.addClass("mdpr-dropdown");
    return this;
  }

  $(this).on("click",function(){
    return multidaterangepickerElement();
    console.log("no");
  })



}));

	/*
	
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
	
	$('#sandbox-container1').on('changeDate', function(e) {
		dates = $(this).datepicker('getFormattedDate')
		$("#date").html("<span>Date</span> - "+ dates +" <b class="caret"></b>");
		$("#calendario").hide();
	});
	
	$('#sandbox-container3').on('changeDate', function(e) {
		dates = $(this).datepicker('getFormattedDate')
	});
	
	$("#btnAceptar").click(function(){
		if(button==2){
			$("#date").html("<span>Date</span> - " + $("#fechaInicio").val() + " - " + $("#fechaFin").val() + " <b class="caret"></b>");
			dates = "";
			dates[0] = $("#fechaInicio").val();
			dates[1] = $("#fechaFin").val();
		}else{
			$("#date").html("<span>Date</span> - Fechas multiples <b class="caret"></b>");
		}
		$("#calendario").hide();
	});
	
	$("#fechaInicio").change(function(){
		if(modificarRange){
			$("#fechaFin").focus();	
		}
	});
*/
