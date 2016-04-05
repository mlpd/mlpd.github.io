var TEXT = 1;
var EMAIL = 2;
var PHONE = 3;
var USERNAME = 4;
var PASSWORD = 5;
var EMPTY_PASSWORD = 6;

function popUp(URL) 
{
	if (window.showModalDialog)
	{
		window.showModalDialog("canada.html", "Canada",
			"dialogWidth:350px;dialogHeight:275px");
		return true;
	}
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '"
			+ id + 
	"', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=300,height=250,left = 550,top = 425');");
}


function val(inputItem, type, required, errmsg, min, max)
{
	if (inputItem.value == null || inputItem.value.length == 0)
	{
		if(!required)
			return true;
		alert(errmsg);
		inputItem.focus();
		return false;
	}

	if(type == TEXT)
		return valText(inputItem, errmsg, min, max);
	if(type == EMAIL)
		return valEmail(inputItem, errmsg);
	if(type == PHONE)
		return valPhone(inputItem, errmsg);
	if(type == USERNAME)
		return valText(inputItem, errmsg, 1, 120);
	if(type == PASSWORD)
		return valText(inputItem,
				'Password must be a minimum of 5 characters',
				3, 120);
	if(type == EMPTY_PASSWORD)
		return valText(inputItem, 'You did not enter a password',1,120);
	return true;
}

function valText(inputItem, errmsg, min, max)
{
	if(value == null || value.length == 0)
		return true;
	if((value.length >= min) && (value.length <= max))
		return true;
	focus;
	if(errmsg == "NO_ALERT")
		return false;
	alert(errmsg);
	return false;
}

//  In general, email addresses may also be pager numbers, so
//  just allow these regardless.  A phone number is pretty
//  tight (exactly 10 digits plus punctuation), so this will
//  not produce many false-positives.
//
function valEmail(inputItem, errmsg)
{
	if(checkPhone(inputItem))
		return true;
	apos=value.indexOf("@");
	dotpos=value.lastIndexOf(".");
	lastpos=value.length-1;
	if(apos<1 || dotpos-apos<2 ||
	   lastpos-dotpos>3 || lastpos-dotpos<2)
	{
		if(errmsg)
			alert(errmsg);
		focus;
		return false;
	}
	return true;
}

function checkPhone(inputItem)
{
	len = 0;
	for(i = 0; i < inputItem.value.length; i++)
	{
		c = inputItem.value.charAt(i);
		checkval = parseInt(c);
		if(c != '-' && c != '.' && c != '(' && c != ')' &&
		   isNaN(checkval))
		{
			return false;
		}
		if(!isNaN(checkval))
			len++;
	}
	if(len == 10)
		return true;
	return false;
}

function valPhone(inputItem, errmsg)
{
	if(checkPhone(inputItem))
		return true;
	if(errmsg)
		alert(errmsg);
	inputItem.focus;
	return false;
}

function valForm(form)
{
	if(form == null || form.elements == null)
		return true;
	if (form.gw_pin.value)
	{
		var nn_re = / *, */g;

		var gw_scrub = form.gw_pin.value.replace(nn_re, ",");
		gw_scrub = form.gw_pin.value.replace(/,,/g, ",");
		gws = gw_scrub.split(",");
		for (i = 0;  i < gws.length;  i++)
		{
			var v = gws[i];
			v = v.replace(/[^\d]/g, "");
			if (v >= 4161990000 && v <= 4161999999)
			{
				if (window.showModalDialog)
					window.showModalDialog('canada.html',
						window,
			'dialogHeight:275px;dialogWidth:300px; help:no');
				else
					alert(
"Beginning April 14, 2006 you will be unable to send messages to pagers with numbers in the range 416-199-0000 up to 416-199-9999 from this website. Please begin using http://www.pagenet.ca/send-a-message.html immediately for numbers within this range. Thank you!");
				break;
			}
		}
	}
	for (i = 0; i < elements.length; i++)
	{
		if(elements[i].onchange != null && !elements[i].onchange())
			return false;
	}
	if (countCharacters() > 500)
	{
		if (confirm('Message greater than 500 characters. Truncate?'))
		{
			var s, l;

			for (tries = 0;tries<100&&countCharacters()>500;tries++)
			{
				s = document.sendmessage.mesg_to_send;
				l = s.value.length;
				if (l > 0)
					document.sendmessage.mesg_to_send.value
						= s.value.substr(0, l - 1);
			}
			return tries < 100;
		}
		return false;
	}
	return true;
}

function countCharacters()
{
	var cnt = 0;

	if(document == null ||
	   document.sendmessage == null ||
	   document.sendmessage.count == null)
		return 0;
	if(document.sendmessage.subject_string != null)
		cnt += document.sendmessage.subject_string.value.length;
	if(document.sendmessage.mesg_to_send != null)
		cnt += document.sendmessage.mesg_to_send.value.length;
	if(document.sendmessage.from_string != null)
		cnt += document.sendmessage.from_string.value.length;
	if(document.sendmessage.resp_a_string != null)
		cnt += document.sendmessage.resp_a_string.value.length;
	if(document.sendmessage.resp_b_string != null)
		cnt += document.sendmessage.resp_b_string.value.length;
	if(document.sendmessage.resp_c_string != null)
		cnt += document.sendmessage.resp_c_string.value.length;
	if(document.sendmessage.resp_d_string != null)
		cnt += document.sendmessage.resp_d_string.value.length;
	if(document.sendmessage.resp_e_string != null)
		cnt += document.sendmessage.resp_e_string.value.length;
	if(document.sendmessage.resp_f_string != null)
		cnt += document.sendmessage.resp_f_string.value.length;
	return document.sendmessage.count.value = cnt;
}

function showHelp(url)
{
	helpwin = window.open(null, 'helpwindow',
			'height=450,width=600,resizable,scrollbars,status');
	helpwin.location = url;
}
