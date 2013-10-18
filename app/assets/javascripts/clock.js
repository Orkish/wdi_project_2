setTime();
this.setInterval(function(){
  setTime();
},500);

function setTime(){
  var date = new Date();
  var h = ''+date.getHours();
  var m = ''+date.getMinutes();
  var s = ''+date.getSeconds();
  
  if(h.length === 1){
    document.getElementById('h0').innerHTML = '0';
    document.getElementById('h1').innerHTML = h;
  }else{
    document.getElementById('h0').innerHTML = h.charAt(0);
    document.getElementById('h1').innerHTML = h.charAt(1);
  }
  if(m.length === 1){
    document.getElementById('m0').innerHTML = '0';
    document.getElementById('m1').innerHTML = m;
  }else{
    document.getElementById('m0').innerHTML = m.charAt(0);
    document.getElementById('m1').innerHTML = m.charAt(1);
  }
  if(s.length === 1){
    document.getElementById('s0').innerHTML = '0';
    document.getElementById('s1').innerHTML = s;
  }else{
    document.getElementById('s0').innerHTML = s.charAt(0);
    document.getElementById('s1').innerHTML = s.charAt(1);
  }
}