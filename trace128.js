var TVCF = "0",TBNAME = "",elementVal= 0,BSTR = "";
var AKEE = "0",nBTBNAME= "",nBTBVALUE= "";
  function OS(){parent.ScanFrame.ScanForm.oScanner.OpenScanner(1);}
  function CS(){parent.ScanFrame.ScanForm.oScanner.OpenScanner(0);}
  function SC(BCN, lLabelType){
     switch(lLabelType){
         case 0:BCN = "0" + BCN;break;
         case 1:BCN = "01" + BCN;break;
         case 2:BCN = "2" + BCN;break;
         case 3:;
         case 4:BCN = "2" + BCN;break;
	 case 8:BCN = "3" + BCN;break;
	 //case 11:BCN = "3" + BCN;break;
	 case 5:;
         case 6:;
         case 10:;
	 case 11:BCN = ">" + BCN;break;
         default:BCN = BCN;break;
        }
    parent.ASPFrame.MyForm.SK.value="S";
    handled=false;
    TF2("E,[F9],[" + BCN + "],");
       BCN="";
     }
function TF2(Data){var frm = parent.ASPFrame.MyForm;
	if (BSTR != ""){TF5("E,[" + TBNAME + "],[" + BSTR + "],");TVCF ="0";TBNAME = "";BSTR = "";}
	if ((Data == "")&&(frm.TS.value != "")){Data = frm.TS.value;}
	else{Data = Data + frm.TS.value;}
	frm.FG.value = "1";
	frm.VD.value = Data;
	frm.submit();
	}
function TF4()
{   var k=0;
    var form=parent.ASPFrame.MyForm;
    while(k != form.elements.length)
    {
    if (form.elements[k].type == "text")
        {           
        if (form.elements[k+1].type == "text")
        { elementVal = k + 1;
            form.elements[k].focus();
            form.elements[k].select();
            break;
        } 
        else
        { elementVal = k + 1;
            form.elements[k].focus();
            form.elements[k].select();
            break;
        }   
        }
    k=k+1;
    }
}
function TF5(Data){var ExS = parent.ASPFrame.MyForm.TS.value;document.MyForm.TS.value = ExS + Data;//    TVCF = 0;
}
function TF6(str, TBoxName){
  TVCF = 1;
  TBNAME = TBoxName;
  BSTR = str;
}
function TF65(inputStr,textboxName){//alert(TBNAME + ", " + textboxName);
if ((TVCF == "1")&&(TBNAME == textboxName)){
    TF5("E,[" + textboxName + "],[" + inputStr + "],");
    TBNAME = "";
    BSTR = "";}
}
function TF7(InputString,TBoxName)/* Lookups*/
{var myObject = new Object();
 var elemNm = parent.ASPFrame.MyForm.elements[TBoxName];
switch (TBoxName){
  case 'F13':case 'D35':{myObject.sStatus = elemNm.value;
			  myObject.sNewStatus = false;//parent.ASPFrame.MyForm.F13
	          elemNm.value  = window.showModalDialog("StatusPage.asp",myObject,"dialogHeight:420px;dialogWidth:300px;");
	          TBNAME = TBoxName;
	        if(myObject.sNewStatus){
               TVCF = 1;
		       TF65(elemNm.value,TBoxName);}
	        FindNextControl(TBNAME);}break;
  default:break;
  }
 Sel(TBoxName); 
}
function TF74(InStr){var myObject = new Object();
var DialogStr = "Movement.asp?sPLU=";
var charStr = InStr.substring(InStr.length-1);
 DialogStr = DialogStr + parent.ASPFrame.MyForm.SPLU.value;
 if(gDV(charStr.charCodeAt(),"Number")>=0){window.showModalDialog(DialogStr,myObject,"dialogHeight:420px;dialogWidth:300px;");}}
function TF75(InputString,TBoxName)/* Lookups*/
{var myObject = new Object();
 var DialogStr = "Dialog.asp?DB=S4V6PDX&Table=" ,newVal;
 var elemNm = parent.ASPFrame.MyForm.elements[TBoxName];
switch (TBoxName){
  case 'F13':case 'D35':{myObject.sStatus = elemNm.value;
			  myObject.sNewStatus = false;//parent.ASPFrame.MyForm.F13
	          elemNm.value  = window.showModalDialog("StatusPage.asp",myObject,"dialogHeight:420px;dialogWidth:300px;");
	          TBNAME = TBoxName;
	        if(myObject.sNewStatus){
               TVCF = 1;
		       TF65(elemNm.value,TBoxName);}
	        FindNextControl(TBNAME);}break;
  case 'F2':case 'R2':case 'F15':case 'F17':case 'F29':
	switch (TBoxName){case 'F2':case 'R2':DialogStr = DialogStr + "S4VENDB&Field=V2";break;
					  case 'F15':DialogStr = DialogStr +  "DEPT&Field=CODE";break;
					  case 'F17':DialogStr = DialogStr +  "MixMatch&Field=CODE";break;
 					  case 'F29':DialogStr = DialogStr +  "LikeCode&Field=CODE";break;}
        newVal = window.showModalDialog(DialogStr,myObject,"dialogHeight:420px;dialogWidth:300px;");
         TBNAME = TBoxName;
         if(newVal != undefined)
			if((elemNm.value != newVal)&&(newVal !="")){elemNm.value = newVal;TVCF = 1;TF65(elemNm.value,TBoxName);}
		 FindNextControl(TBNAME);
         break;
  default:break;
  }
 Sel(TBoxName); 
}
function TF76(TBoxName)
 {var myObject = new Object();
  var elemNm = parent.ASPFrame.MyForm.elements[TBoxName];
  var DialogStr = "ControlVals.asp?sPLU=";
  switch (TBoxName){
   case 'F78':case 'D18':{myObject.sStatus = elemNm.value;
			  DialogStr = DialogStr + parent.ASPFrame.MyForm.SPLU.value;// + "&RadioID=" + parent.ASPFrame.MyForm.RadioID.value;
			  elemNm.value  = window.showModalDialog(DialogStr,myObject,"dialogHeight:420px;dialogWidth:300px;");
			  TBNAME = TBoxName;TVCF = 1;TF65(elemNm.value,TBoxName);
			  FindNextControl(TBoxName);
			  break;}
	}
 }
function TF8(e,TBoxName,inputval)
{var bVal=false;
 switch (e.keyCode){
     case 8:;
	 case 13:if((TBoxName == "F9")&& TVCF == 1){
				if(inputval != ""){
				//parent.ASPFrame.MyForm.SPLU.value = inputval;
				//alert("TF8, " + parent.ASPFrame.MyForm.SPLU.value);
				}
			    TF9("E,[" + TBoxName + "],[" + inputval + "],");}//Handled = true;
			 else if((TVCF == 1)&&((TBoxName == "R40")||(TBoxName == "R5"))){}//TF65(parent.ASPFrame.MyForm.elements[TBoxName].value,TBoxName);}
			 else if(TVCF==0){
			    e.keyCode = -1;
			    FindNextControl(TBoxName);}
			 else{TVCF = 0;}
			 nBTBNAME = "";nBTBVALUE = "";		         
			 bPLU = "";
			 break;
	 case 27:if(TBoxName == "PF"){e.keyCode = -1;TF9("E,[PF],[],");}
	         else{TF9("E,[F9],[X],");}
	         break;
	 case 61:;
	 case 187:keyval=113;break;
	 default:e.keyCode = breakoutkeystrokes(e.keyCode,TBoxName);
				if((e.keyCode > -1)&&(TBoxName != "")){TF6("",TBoxName);//temp as of 10-04-2005
				  nBTBNAME = TBoxName;// alert(TBoxName + ", " + nBTBVALUE);
				  nBTBVALUE = nBTBVALUE + String.fromCharCode(e.keyCode);
				}
			// bVal=true;
		     break;
	}
	//return bVal;
}
function TF85(e){
 var keyval = e.keyCode;
  	switch (e.keyCode){
		 case 13:FindNextControl("");
				 keyval = -1;
				 bPLU = "";
				 nBTBNAME = "";nBTBVALUE = "";		         
		         break;
		 case 27:TF9("E,[F9],[X],");
				 keyval = -1;
				 break;
	     case 61:;
	     case 187:keyval=113;break;
		 default:if(parent.ASPFrame.MyForm.EditNo.value == 0){//MenuKeys 01RSVX
					if(gDV(keyval,"ButtonVal")<0)return -1;
					else{TF9("BP,[M1],[" + String.fromCharCode(keyval) + "],");} 
		          } 
          break;
		}
		e.keyCode = keyval;
		return e.keyCode;	
}
function TF86(e){
				if(e.keyCode==27){TF9("E,[F9],[X],");e.keyCode = -1;}
				if(e.keyCode == 113||e.keyCode==187||(e.keyCode ==38)){TF11();}//TF9("BP,[BU],[U],");}//Func2
}
function TFKD(e){if(e.keyCode==3){TF9("E,[F9],[X],");}
				 if((e.keyCode == 187)||(e.keyCode == 61)){e.keyCode=113}}//IPAD esc
function Sel(elemName){var form = parent.ASPFrame.MyForm.elements[elemName]
						if(form.type == "text")form.select();nBTBVALUE = "";}
function FindNextControl(elemName){var form = parent.ASPFrame.MyForm.elements;
    if(elemName != "")for(var i = 0;i<form.length;i++){if(form[i].type == "text")if(form[i].name == elemName){elementVal = i + 1;}}
  if(elementVal < form.length){while(form[elementVal].type == "hidden")elementVal++;form[elementVal].focus();
								if(form[elementVal].type == "text")form[elementVal].select();elementVal++;}
  else{elementVal = 0;
		while(form[elementVal].type == "hidden")elementVal++;
		form[elementVal].focus();
		if(form[elementVal].type == "text")form[elementVal].select();
        elementVal++;}
}
/*function FindNextControl(elemName){var form = parent.ASPFrame.MyForm.elements;
	if(elemName != "")for(var i = 0;i<form.length;i++){
						  if(form[i].name == form[elemName].name)elementVal = i + 1;}
	else {elementVal = elementVal + 1;}
		if(elementVal < form.length){form[elementVal].focus();}
		else if(elementVal == form.length){elementVal = 0;while(form[elementVal].type == "hidden")elementVal=elementVal + 1;}					  
		if(form[elementVal].type == "text")form[elementVal].select();
}*/
function breakoutkeystrokes(keyval,TBName){
	switch(TBName){
	 case'F3':case'F9':case'F15':case'F16':case'F29':case'F71':case'H6':case'D3':
	 case'D4':case'D6':case'D7':case'D9':case'D20':case'D22':case'D26':case'D32':case'D36':case'D40':
	 case'D41':case'D42':case'D43':case'D65':case'D95':case'D96':case'D97':case'N2':case'N3':
	 case'N6':case'N8':case'N9':case'N10':case'N11':case'N14':case'N17':case'N57':case'N58':
	 case'R21':case'R23':
		  if(gDV(keyval,"Number")<0)return -1;
		  else{TVCF = 1;
		   return keyval;}
	      break;
	 case'F7':case'F8':case'F48':case'H4':case'H5':case'R4':case'D4':case'D5':case'D7':case'D21':
		  if(gDV(keyval,"Date")<0)return -1;
		  else{TVCF = 1;
		   return keyval;}
		   break;
	 case'F78':case'F20':case'F40':case'F50':case'F52':case'F53':case'F58':case'F60':case'F70':
	 case'F81':case'D8':case'D10':case'D12':case'D18':case'D19':case'D44':case'R20':case'R22':
	 case'R24':case'R30':case'N11':
		  if(gDV(keyval,"Currency")<0)return -1;
		  else{TVCF = 1;
		   return keyval;}
		   break;
	 default: return keyval;
	}
}
function gDV(charVal,charType){
	var charval = "";
	charval = String.fromCharCode(charVal).toUpperCase();
	switch(charType){
	case "Number":return ("0123456789-".indexOf(charval));break;
	case "Date":return ("0123456789/".indexOf(charval));break;
	case "Currency":return ("0123456789./#".indexOf(charval));break;
	case "ButtonVal":return ("012346RSVX".indexOf(charval));break;
	default:/*return ("0123456789FPQMTX".indexOf(charval))*/;break;
    }}
function TF9(Data)
	{var k=0;var TBP=0;var form=parent.ASPFrame.MyForm;
	while(k != form.elements.length){
		if (form.elements[k].type == "text")
		{
		TBP = 1;
			if (TVCF == "0")
				TVCF = "2";
		}
		k=k+1;}
	if (TBP == 1){
	 if (form.SK.value=="K"){TF2(Data);}
		// TF2(Data + form.TS.value);}
	 else form.SK.value="K";}
	if (TBP == 0){
	 if (form.SK.value=="K"){
		TF2(Data);}
	 else
		form.SK.value="K";}
	}
function TF10(e){
    if(e.keyCode != 13||e.keyCode == null){
	parent.ASPFrame.MyForm.RSVP.value = "0";
	parent.location.href="LogOff.asp";
	TF2("");}
	else{e.keyCode = -1;FindNextControl("");}
	}
function TF11(){if((nBTBNAME != "")&&(nBTBVALUE != "")){TBNAME = nBTBNAME;BSTR = nBTBVALUE;}TF2("");}