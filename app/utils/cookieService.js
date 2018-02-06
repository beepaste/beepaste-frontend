export default class CookieService{
  static setCookie(cname, cvalue) {
    if(typeof document === 'undefined'){
      return;
    }
      var d = new Date();
      d.setTime(d.getTime() + (13*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  static getCookie(cname){
    if(typeof document === 'undefined'){
      return "";
    }
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
}
