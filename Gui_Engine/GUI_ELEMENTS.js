
//##################################
function Write_Memory(is_Name, is_Data){localStorage.setItem(is_Name,is_Data);}
function Read_Memory(is_Name){return localStorage.getItem(is_Name);}
function Delete_Memory(is_Name){localStorage.removeItem(is_Name);}
function Clear_All_Memory(){localStorage.clear();}
//##################################
function Dispatch_Event(is_Name, is_Data){document.body.dispatchEvent(new CustomEvent(is_Name, { detail: {data: is_Data} }));}
//##################################
function Loader_Hide()       {$.mobile.loading( "hide" );}
function Loader_Show(is_Text){$.mobile.loading( 'show', {text: is_Text,textVisible: true,theme: 'b',html: ""});}
//##################################
function Popup_Open(is_ID) {$('#'+is_ID).popup("open",{ transition: "pop" });}
//##################################	
function Element_Hide(is_ID) {$('#'+is_ID).hide();}
function Element_Show(is_ID) {$('#'+is_ID).show();}
//##################################
function put_input_text(is_ID,is_Value)     {$('#'+is_ID).val(is_Value);}
function put_input_Password(is_ID,is_Value) {$('#'+is_ID).val(is_Value);}
function Put_Header_Text(is_Page,is_Text)   {$("#page_"+is_Page+" h1 #MyHeader_Text_"+is_Page).text(is_Text);}
//##################################
function get_input_text(is_ID){ return $('#'+is_ID).val();}
function get_input_Password(is_ID){ return $('#'+is_ID).val();}
//##################################
function Page_change(is_Value){$.mobile.changePage("#page_"+is_Value);}
function Panel_Open(is_Value){$( "#"+is_Value ).panel( "open" );}
//##################################
function Theme_Change(is_Theme){
	var themeClass = is_Theme;
	$( "#page_1" ).removeClass( "ui-page-theme-a ui-page-theme-b ui-page-theme-c ui-page-theme-d ui-page-theme-e" ).addClass( "ui-page-theme-" + themeClass );
	$( "#ui-body-test" ).removeClass( "ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e" ).addClass( "ui-body-" + themeClass );
	$( "#ui-bar-test, #ui-bar-form" ).removeClass( "ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e" ).addClass( "ui-bar-" + themeClass );
	$( ".ui-collapsible-content" ).removeClass( "ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e" ).addClass( "ui-body-" + themeClass );
	$( ".theme" ).text( themeClass );
};
//##################################
function Create_Page(PageName){
	var SCR = '';
	SCR +='\n'+ '<div data-role="page" id="page_'+PageName+'" data-url="page_'+PageName+'">';
	SCR +='\n'+ '	<div data-role="header" id="header_'+PageName+'">';
	SCR +='\n'+ '		<h1><span id="MyHeader_Text_'+PageName+'"></span></h1>';
	SCR +='\n'+ '		<div data-role="navbar">';
	SCR +='\n'+ '			<div data-role="navbar_'+PageName+'"></div>';
	SCR +='\n'+ '		</div>	';
	SCR +='\n'+ '	</div><!-- /header -->';
	SCR +='\n'+ '	<div data-role="content_'+PageName+'" class="ui-content" role="main"></div>	';
	SCR +='\n'+ '	<div data-role="panel_'+PageName+'"></div>';
	SCR +='\n'+ '	<div data-role="footer" data-position="fixed">';
	SCR +='\n'+ '		<h1> </h1>';
	SCR +='\n'+ '	</div><!-- /footer -->';
	SCR +='\n'+ '</div>';
	SCR +='\n'+ '<!-- ####################################################################################### -->';
	$('[data-role="IS_HTML_BODY"]').append(SCR);		
}
//##################################
function do_Replace(isText,FromText, ToText){
	for (i = 0; i < 1000; i++) {
		if(isText.indexOf(FromText) === -1)break;
		//console.log("gggggggggggggg "+doo);
		isText = isText.replace(FromText,ToText);
	}
	return isText;
}
//##################################
function Put_Slider(is_ID,is_Value){ $('#'+is_ID).val(is_Value).slider("refresh");}
function Get_Slider(is_ID){ return $('#'+is_ID).val();}
//##################################
function JAVA_APPEND(is_Page,is_Script){
	$('[data-role="IS_JAVA_SCRIPT"]').append(is_Script);
}
function HTML_APPEND(is_Page,is_Html){
	$('[data-role="'+is_Page+'"]').append(is_Html);
}
//##################################












