let fecha = new Date();
fecha.setTime=(fecha.getTime()+1000*60*60*24*3);
document.cookie="cookieDia3= Esta cookie dura 3 dias; expires=" +fecha.topGMTSring();
let cookies = document.cookie
