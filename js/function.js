	var x1=document.getElementById('diem1');
 	var x2=document.getElementById('diem2');
function Tinhchiso() {
 	if(x1.value=='' && x2.value=='')
 	{
 		alert('Bạn đã nhập thiếu giá trị vào ô nhập liệu');
  	}
 	else if(x1.value=='')
 	{
  		alert('Bạn đã nhập thiếu giá trị ô nhập liệu thứ 1');
 	}
 	else if(x2.value=='')
 	{
  		alert('Bạn đã nhập thiếu giá trị ô nhập liệu thứ 2');
 	}
 	else if(isNaN(x1.value)&&isNaN(x2.value))
 	{
  		alert('Kí tự bạn nhập không phải là số');  
 	}
 	else if(isNaN(x1.value) )
 	{
  		alert('Kí tự bạn nhập không phải là số');  
 	}
  	else if(isNaN(x2.value))
 	{
  		alert('Kí tự bạn nhập không phải là số');  
 	}
	var cs=document.getElementById('tcs');
	cs=(parseFloat(x2.value)-parseFloat(x1.value));
	return cs;
}
function Tinhtien() {
	var tt=document.getElementById('ttt');
	tt=Tinhchiso();
	if (tt<=50) {
		return tt*1678;
	}
	else if (tt<=100) {
		return tt*1734;
	}
	else if (tt<=200) {
		return tt*2014;
	}
	else if (tt<=300) {
		return tt*2536;
	}
	else if (tt<=400) {
		return tt*2834;
	}
	else if (tt>400) {
		return tt*2927;
	}
}

