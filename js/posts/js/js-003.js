
$.fn.wl_calendar = funciton(date, settings){
  debugger;
  // date 기준일
  //calendar를 적용할 div를 찾는다.
  var defaults =  {
      year :  true,
      month_format : "MM",
      day_tit: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  }
  var $wrapper = $(this).find(".wl-cal-wrapper");
} 

var wiselotis_post_js003 = function(){

  wiselotis.call(this);

  this.init = function(){


  }
}


//Calendar 객체
function Calendar(newDate){
  if(newDate == null){
    this.date = new Date();
  }
  this.date = newDate;
  this.set = function(newDate) {
    this.date = newDate;
  };
  this.get = function() {
    return this.date;
  };
  this.getLongTime = function() {
    return this.date.getTime();
  };
  this.setLongTime = function(millisec) {
    return this.date.setTime(millisec);
  };
  this.setTxtTime = function(time_txt){
    var time = time_txt.split(":");
    this.date.setHours(time[0]);
    this.date.setMinutes(time[1]);
    this.date.setSeconds(time[2]);
  }
  this.getTxtTime = function(){
    return this.date.setHours() + ":" + this.date.setMinutes() +":" +this.date.setSeconds();
  }
  this.addDay = function( day ) {
    this.setLongTime(this.getLongTime() + day * 86400000);
  }
  this.getYear = function() {
    return this.date.getFullYear();
  };
  this.setYear = function(year) {
    this.date.setFullYear(year);
  };

  this.getMonth = function() {
    return this.date.getMonth()+1;
  };
  this.setMonth = function(month) {
    this.date.setMonth(month-1);
  };
  this.getDayOfMonth = function() {
    return this.date.getDate();
  };
  this.setDayOfMonth = function(dayOfMonth) {
    this.date.setDate(dayOfMonth);
  };

  this.setDayOfWeek = function(dayOfWeek) {
    var day = dayOfWeek - this.date.getDay();
    this.addDay(day);
  };
  this.getDayOfWeek = function() {
    return this.date.getDay();
  };

  this.getLastDay = function(){
    return new Date(this.date.getFullYear(), (this.date.getMonth())+1, 0);
  }
  this.getStartDay = function(){
    return new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  }
  this.setDate = function( year, month, dayOfMonth ) {
    this.setYear(year);
    this.setMonth(month);
    this.setDayOfMonth(dayOfMonth);
  };
  this.getyyyyMMdd = function() { return this.getYear() + "-" + filling(this.getMonth(), 2) + "-" + filling(this.getDayOfMonth(), 2); };

  var filling = function(value, length) {
    var result = "" + value;
    for( var step = result.length; step < length; step++ ) {
      result = "0" + result;
    }
    return result;
  }
}
