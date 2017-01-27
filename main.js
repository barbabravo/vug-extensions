module.exports.install = function(Vue, options){
  Vue.filter('formatDate', function(timestamp, format, default_value) {
    /* format : yyyy-MM-dd-HH-mm-ss */
    var timestamp = timestamp || 0, default_value = default_value || '', ret;

    var covertNumberToTwoDigit = function(number) {
      return number.toString().replace(/^(\d)$/, '0$1');
    }
    if(!timestamp || timestamp == '0') {
      ret = default_value;
    }else{
      if(timestamp.toString().length == 10){
        timestamp = timestamp * 1000;
      }
      var date = new Date(timestamp),
      full_year = date.getFullYear() || '0000',
      month = covertNumberToTwoDigit(date.getMonth() + 1) || '00',
      day = covertNumberToTwoDigit(date.getDate()) || '00',
      hour = covertNumberToTwoDigit(date.getHours()) || '00',
      minute = covertNumberToTwoDigit(date.getMinutes()) || '00',
      second = covertNumberToTwoDigit(date.getSeconds()) || '00';
      ret = format.replace(/yyyy/, full_year).replace(/MM/, month).replace(
        /dd/, day).replace(/HH/, hour).replace(/mm/, minute).replace(
          /ss/,
          second);
    }
    return ret;
  })

  Vue.filter('translate', function(val, base_list){
    var text = '', obj = {};
    base_list = base_list || [];
    for(var i = 0, len = base_list.length; i<len; i++){
      obj = base_list[i];
      if(obj.value == val){
        text = obj.name;
        break;
      }
    }
    return text;
  })
  console.log("vue extensions installed!");
}
