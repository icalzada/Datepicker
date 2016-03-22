(function(factory){
  if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
  } else if (typeof exports === 'object') {
      factory(require('jquery'));
  } else {
      factory(jQuery);
  }
}(function($, undefined){

  var languages = {
    en: {
      btnSingle: "Single Date",
      btnRange: "Range Date",
      btnMultiple: "Multiple Date",
      inputStartDate: "Start Date",
      inputEndDate: "End Date",
      btnAccept: "Accept"
    },
    es: {
      btnSingle: "Fecha",
      btnRange: "Rango de fechas",
      btnMultiple: "Fechas multiples",
      inputStartDate: "Fecha inicio",
      inputEndDate: "Fecha fin",
      btnAccept: "Aceptar"
    }
  };

  var dates = [];
  var settings;
  var exists = false;
  var show = false;
  var div;
  var button = 1;
  
  var startRange = false;
  var update = false;

  var divMdpr = $('<div id="multidaterangepicker" class="mdpr-dropdown"></div>');
  var divOptions = $('<div class="mdpr-options"></div>');
  var btnSingle = $('<button id="mdpr-btnSingle" class="mdpr-btn" ></button>');
  var btnRange = $('<button id="mdpr-btnRange" class="mdpr-btn"></button>');
  var btnMultiple = $('<button id="mdpr-btnMultiple" class="mdpr-btn"></button>');
  var inputStartDate = $('<input type="button" id="mdpr-startDate" class="mdpr-range mdpr-form-control" value=""></label>');
  var inputEndDate = $('<input type="button" id="mdpr-endDate" class="mdpr-range mdpr-form-control" value=""></label>');
  var btnAccept = $('<button class="mdpr-btn mdpr-accept" id="mdpr-btnAccept"></button>');
  var divSingle = $('<div id="mdpr-container-single"></div>');
  var divRange = $('<div id="mdpr-container-range"></div>');
  var divMultiple = $('<div id="mdpr-container-multiple"></div>');

  $.fn.multidaterangepicker = function(options) {
    div = this;
    div.on("click",clickDate);
    settings = $.extend({
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
      multidateSeparator: ",",
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
  };


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
      multidateSeparator: settings.multidateSeparator,
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
    btnAccept.hide();
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
      multidate: true,
      multidateSeparator: settings.multidateSeparator,
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
    inputStartDate.show();
    inputEndDate.show();
    inputStartDate.addClass("mdpr-active-form-control");
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
      multidateSeparator: settings.multidateSeparator,
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

  divSingle.on("changeDate", function(e) {
    dates = $(this).datepicker('getFormattedDate');
    divMdpr.hide();
    show = false;
    var datesArray = new Array();
    datesArray.dates = dates.split(settings.multidateSeparator);
    datesArray.option = "single";
    div.trigger("getDates",[datesArray]);
    $("#resultDates").remove();
    spanDate = $('<span id="resultDates"></span>');
    spanDate.append(dates);
    div.append(spanDate);
  });

  divRange.on("changeDate", function(e) {
    dates = $(this).datepicker('getFormattedDate');
    if(!update){
      if(!startRange){
        startRange = true;
        inputStartDate.removeClass('mdpr-active-form-control');
        inputEndDate.addClass('mdpr-active-form-control');
        divRange.datepicker('setStartDate', dates);
        update = true;
        divRange.datepicker('setDate', dates);
      }else{
        startRange = false;
        divMdpr.hide();
        show = false;
        inputEndDate.removeClass('mdpr-active-form-control');
        inputStartDate.addClass('mdpr-active-form-control');
        var datesArray = new Array();
        datesArray.dates = dates.split(settings.multidateSeparator);
        datesArray.option = "range";
        div.trigger("getDates",[datesArray]);
        $("#resultDates").remove();
        spanDate = $('<span id="resultDates"></span>');
        spanDate.append(datesArray.dates[0] + " - " + datesArray.dates[1]);
        div.append(spanDate);
        update = true;
        divRange.datepicker('clearDates');
        divRange.datepicker('setStartDate',settings.startDate);
      }
    }else{
      update = false;
    }
  });

  divMultiple.on("changeDate", function(e) {
    dates = $(this).datepicker('getFormattedDate');
  });

  btnAccept.on("click",function(){
    divMdpr.hide();
    show = false;
    var datesArray = new Array();
    datesArray.dates = dates.split(settings.multidateSeparator);
    datesArray.option = "multiple";
    div.trigger("getDates",[datesArray]);
    $("#resultDates").remove();
    spanDate = $('<span id="resultDates">Multiple</span>');
    div.append(spanDate);
  });

  function clickDate(){
    if(!exists && !show){
      btnSingle.append(languages[settings.language].btnSingle);
      btnRange.append(languages[settings.language].btnRange);
      btnMultiple.append(languages[settings.language].btnMultiple);
      inputStartDate.val(languages[settings.language].inputStartDate);
      inputEndDate.val(languages[settings.language].inputEndDate);
      btnAccept.append(languages[settings.language].btnAccept);
      divOptions.append(btnSingle);
      divOptions.append(btnRange);
      divOptions.append(btnMultiple);
      divOptions.append(inputStartDate);
      divOptions.append(inputEndDate);
      divOptions.append(btnAccept);
      divMdpr.append(divOptions);
      divMdpr.append(divSingle);
      divMdpr.append(divRange);
      divMdpr.append(divMultiple);
      $("body").append(divMdpr);
      exists = true;
      show = true;
      btnSingle.trigger("click");
    }else if(!show){
      divMdpr.show();
    }
  }

}));
