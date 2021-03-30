



function isArticle(data) { 
switch(data){


//////////////////////////////////////////////////////////////////////
case "Template":_Structure_(`
`);_Relative_(`
`);_Description_(`
`);_Example_(`
`);break;
//////////////////////////////////////////////////////////////////////
case "Page":_Structure_(`
..[page],name
..{ 
	*GUI Content*
..}
`);_Relative_(`
..create_page, NewPageName
Create_Page('NewPageName');
Page_change('PageName');
`);_Description_(`
The page is the primary unit of interaction that is 
used to group content into logical views that can 
be animated in and out of view with page transitions.
`);_Example_(`
..[page],1
..{
	..header_text,This is a page 1
	..create_page,2
	..button, Go to page 2, Page_change('2');
..}
..[page],2
..{
	..header_text,This is a page 2
	..button, Go to page 1, Page_change('1');
..}	
`);break;	
//////////////////////////////////////////////////////////////////////
case "Collaps":_Structure_(`
..[collaps],name
..{ 
	*GUI Content*
..}
`);_Relative_(`
`);_Description_(`
Collapsibles are simple widgets that allow you to 
expand or collapse content when tapped and are useful 
in mobile to provide a compact presentation of content.
`);_Example_(`
..[page],1
..{
	..[collaps],collaps
	..{
		..label,label
		..button,button,
	..}
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Popup":_Structure_(`
..[popup](ID) ,10px 20px
..{
	*GUI Content*
..}
`);_Relative_(`
Popup_Open('ID');
`);_Description_(`
The popup widget can be used for various types of popups. 
From a small tooltip popup to a large photo lightbox.
`);_Example_(`
..[page],1
..{
    ..button, Open Popup, Popup_Open('ID');
    ..[popup](ID) ,10px 20px
    ..{ 
		..label,label
		..button,button,
    ..}
..}
`);break;
//////////////////////////////////////////////////////////////////////		
case "Panel":_Structure_(`
..[panel](ID)
..{ 
	*GUI Content*
..}
`);_Relative_(`
Panel_Open('ID');
`);_Description_(`
Flexible by design, panels can be used for navigation, forms, inspectors and more.
`);_Example_(`
..[page],1
..{
	..button, Open Panel, Panel_Open('pa1');
	..[panel](pa1)
	..{
		..label,
		..label,Host:
		..input_text(it1),
		..label,Port:
		..input_text(it2),
		..label,Device ID:
		..input_text(it3),
	..}
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Tab":_Structure_(`
..[tab](ID),
	--name1(ID_1)
	--name2(ID_2)
	--name3(ID_3)
..{
	..[t](ID_1) ..{ *GUI Content* ..}
	..[t](ID_2) ..{ *GUI Content* ..}
	..[t](ID_3) ..{ *GUI Content* ..}
..}
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..[tab](tab1),--tab1_1(tab1_1)--tab1_2(tab1_2)--tab1_3(tab1_3)
	..{
		..[t](tab1_1) 
		..{ 
			..label,
			..label, This is a tab1 section 1 
			..button,button1 
		..}
		..[t](tab1_2) 
		..{ 
			..label,
			..label, This is a tab1 section 2 
			..button,button2 
		..}
		..[t](tab1_3) 
		..{ 
			..label,
			..label,Host:
			..input_text(it1),
			..label,Port:
			..input_text(it2),
			..label,Device ID:
			..input_text(it3),
		..}
	..}
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Element Grouper":_Structure_(`
..##,2
..##,3
..##,4
..##,5
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{
		..button,1,
	..##,2
		..button,1,
		..button,2,
	..##,3
		..button,1,
		..button,2,
		..button,3,
	..##,4
		..button,1,
		..button,2,
		..button,3,
		..button,4,
	..##,5
		..button,1,
		..button,2,
		..button,3,
		..button,4,
		..button,5,
..}			
`);break;
//####################################################################	
case "Button":_Structure_(`
..button(ID), name, *JavaScript*
`);_Relative_(`
`);_Description_(`
..button - ეს არის  სკრიპტის ელემენტი, რომეილც ქმნის ღილაკს.
ღილაკზე დაჭერისას  ავტომატურად სრულდება ..button სტრუქტურის 
ბოლოში მითითებული ჯავასქრიპტის კოდი *JavaScript*. 
name - წარმოადგენს ტექსტს, რომელიც განთავსდება ღილაზე
(ID) - წარმოადგენს კომპონენტის ID, ის საჭიროა იმისთვის რომ კომპონენტზე 
მოვახხდინოთ გარკვეული მანიპულაციები. შესაძლებელია არ მივუთითოთ 
კომპონენტს მისი ID ნომერი, სისტემა ავტომატურად მიანიჭებს მას ჩვენთვის 
უცნობ უნიკალური ID ნომერს - ამ დროს ID-თან ერთად, ბრჭყალებიც არ უნდა 
იყოს განთავსებული კომპონენტის გვერძე.
`);_Example_(`
..[page],1
..{ 
	..input_text(it1)
	..##,2
	..button, Button 1, 
                   put_input_text('it1','Button 11111111');
	..button, Button 2, 
                   put_input_text('it1','Button 22222222');
..}	
`);break;
//////////////////////////////////////////////////////////////////////
case "Flip":_Structure_(`
..flip(ID),on(1),off(0),*JavaScript*(Value);
`);_Relative_(`
`);_Description_(`
..flip - ეს არის სკრიპტის ელემენტი, რომელიც ქმნის ორ პოზიციან გადამრთველს. 
გადამრთველს გადართვისას ავტომატურად სრულდება ..flip სტრუქტურის ბოლოში 
მითითებული ჯავასქრიპტის კოდი *JavaScript*. 
 ..flip ელემენტს გააჩნია ჯავა სქრიპტის ცვლადი Value, 
 რომლის მნიშვნელობა იცვლება იმის მიხედვით თუ რომელ 
 პოზიციაში იმყოფება გადამრთველი. Value-ს მნიშვნელობები 
 წინასწარ არის მითითებული ..flip ელემენტის სტრუქტურის მერე და მესამე 
 პოზიციებზე .  ..flip ელემენტის სტრუქტურის მერე პოზიცია on(1), 
 განსაზვრავს გადამერთველის მარცხენა მხარის წარწერას on და Value მნისვნელობას 1, 
 მარცხნივ გადართვის მერე. შესაბამისად ..flip ელემენტის სტრუქტურის მსამე პოზიცია 
 off(0), განსაზვრავს გადამერთველის მარჯვენა მხარის წარწერას off და 
 Value მნისვნელობას 0, მარჯვნივ გადართვის მერე. 
(ID) - წარმოადგენს კკომპონენტის ID, ის საჭიროა იმისთვის რომ კომპონენტზე მოვახდინოთ 
გარკვეული მანიპულაციები. შესაძლებელია არ მივუთითოთ კომპონენტს მისი ID ნომერი, 
სისტემა ავტომატურად მიანიჭებს მას ჩვენთვის უცნობ უნიკალური ID 
ნომერს - ამ დროს ID-თან ერთად, ბრჭყალებიც არ უნდა იყოს 
განთავსებული კომპონენტის გვერძე.
`);_Example_(`
..[page],1
..{ 
	..##,2
	..flip,on(1),off(0), put_input_text('it6',Value);
	..input_text(it6)
..}	
`);break;
//////////////////////////////////////////////////////////////////////
case "Slider":_Structure_(`
..slider(ID),min,max,step,*JavaScript*(Value);
`);_Relative_(`
Put_Slider('ID','text');
Get_Slider('ID');
`);_Description_(`Sliders are used to enter numeric values along a continuum
`);_Example_(`
..[page],1
..{
	..input_text(it5)
	..slider(s1),0,150,1,put_input_text('it5',Value);
	..button, Reset, Put_Slider('s1','0');
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Checkbox":_Structure_(`
..checkbox(ID),v|h,
	--name1(val1)
	--name2(val2),*JavaScript*[Status,Value]
`);_Relative_(`	
`);_Description_(`
Checkbox inputs are used to provide a list of options 
where more than one can be selected. Checkbox buttons 
are enhanced by the checkboxradio widget.
`);_Example_(`
..[page],1
..{ 
	..input_text(it2)
	..##,2	
	..checkbox, h, --name1(1111)--name2(2222),
		put_input_text('it2','Status:'+Status+' Value:'+Value);
	..checkbox, v, --name1(2222)--name2(3333),
		put_input_text('it2','Status:'+Status+' Value:'+Value);
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Radio":_Structure_(`
..radio(ID), v|h,
	--name1(val1)
	--name2(val2),*JavaScript*[Value]
`);_Relative_(`
`);_Description_(`
Radio inputs are used to provide a list of options 
where only a single option can be selected. Radio 
buttons are enhanced by the checkboxradio widget.
`);_Example_(`
..[page],1
..{ 
	..input_text(it3)
	..##,2	
	..radio, h, --name1(1111)--name2(2222),
		put_input_text('it3','Value:'+Value);
	..radio, v, --name1(3333)--name2(4444),
		put_input_text('it3','Value:'+Value);
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Select":_Structure_(`
..select(ID), 
	--name1(val1)
	--name2(val2),*JavaScript*[Value]
`);_Relative_(`
`);_Description_(`
The select menu is based on a native select element, 
which is hidden from view and replaced with a 
custom-styled select button. Tapping it opens the native menu.
`);_Example_(`
..[page],1
..{
	..##,2
	..select,
	--Abarth      (1949–present)
	--Alfa Romeo  (1910–present)
	--Ferrari     (1947–present)
	--Fiat        (1899–present)
	--Lamborghini (1963–present)
	--Lancia      (1906–present)
	--Maserati    (1914–present)
	--Pagani      (1992–present),
              put_input_text('it4',Value);
	..input_text(it4)
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Listview":_Structure_(`
..listview(ID),
	--name1(val1)
	--name2(val2),*JavaScript*[Value]
`);_Relative_(`
`);_Description_(`
A listview is coded as a simple unordered list (ul) 
or ordered list (ol) with a data-role="listview" 
attribute and has a wide range of features.
`);_Example_(`
..[page],1
..{ 
	..input_text(it7)
	..##,2
	..listview,
	--Abarth      (1949–present)
	--Alfa Romeo  (1910–present)
	--Ferrari     (1947–present)
	--Fiat        (1899–present), put_input_text('it7',Value);
	..listview,
	--Lamborghini (1963–present)
	--Lancia      (1906–present)
	--Maserati    (1914–present)
	--Pagani      (1992–present), put_input_text('it7',Value);
..}
`);break;
//####################################################################	
case "Label":_Structure_(`
..label(ID),text
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{ 
	..label,jQuery Mobile is a touch-optimized 
		web framework 
		(also known as a mobile framework), 
		more specifically a 
		JavaScript library, developed 
		by the jQuery project team.
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Info":_Structure_(`
..info(ID),1|2|3,name,text
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{ 
	..##,3
	..info,1,jQuery Mobile,
	jQuery Mobile is a touch-optimized 
	web framework 
	(also known as a mobile framework)
	
	..info, 2, jQuery Mobile,
	jQuery Mobile is a touch-optimized 
	web framework 
	(also known as a mobile framework)
	
	..info, 3, jQuery Mobile,
	jQuery Mobile is a touch-optimized 
	web framework 
	(also known as a mobile framework)
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Textarea":_Structure_(`
..textarea(ID),text
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{ 
	..textarea(ta1),
	jQuery Mobile is a touch-optimized web framework 
	(also known as a mobile framework), 
	more specifically a JavaScript library, 
	developed by the jQuery project team. 
	The development focuses on creating a framework 
	compatible with a wide variety of smartphones 
	and tablet computers,[3] made necessary by 
	the growing but heterogeneous tablet and
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Input Text":_Structure_(`
..input_text(ID)		
`);_Relative_(`
put_input_text('ID','text or variable');
get_input_text('ID');
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..label,Type some text
	..input_text(it1)
	..button, Rewrite text, 
		put_input_text('it2',get_input_text('it1'));
	..input_text(it2)
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Input Password":_Structure_(`
..input_password(ID),text
`);_Relative_(`
put_input_Password('ID','text');
get_input_Password('ID');
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..label,Type some text
	..input_password(ip1)
	..button, Rewrite text,
		put_input_text('it2',get_input_text('ip1'));
	..input_text(it2)
..}
`);break;
//####################################################################
case "Header Text":_Structure_(`
..header_text,Text
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..header_text, HEADER
..}
`);break;
//////////////////////////////////////////////////////////////////////	
case "Header Button":_Structure_(`
..header_button,name,jQueryMobile,*JavaScript*
`);_Relative_(`
https://demos.jquerymobile.com/1.4.5/icons/
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..header_button,name, 
		ui-btn ui-btn-icon-notext ui-corner-all ui-icon-cloud, 
		console.log("Cloud");
	..header_button,name, 
		ui-btn ui-btn-icon-notext ui-corner-all ui-icon-gear,
		console.log("Gear");
..}
`);break;
//####################################################################					
case "HTML":_Structure_(`
..html,HTML
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..html,
		<label for="file">progress:</label>
		<progress id="file3" value="32" max="100"> 75% </progress>
		<hr>
	..label,
	..html,
		<label for="file">iframe:</label>
		<iframe width="300" height="200"
		src="https://www.youtube.com/embed/4AarTP0n_GY"
		frameborder="0" 
		allow="accelerometer;
		autoplay; 
		clipboard-write;
		encrypted-media;
		gyroscope; 
		picture-in-picture"
		allowfullscreen>
		</iframe>
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Java Script":_Structure_(`
..js,*JavaScript*
..javascript,*JavaScript*
`);_Relative_(`
`);_Description_(`
ეს არის  სკრიპტის ელემენტი, რომეილის საშუალებით შესაძლებელია 
HTML დოკუმენტში ჩავამატოთ ნებისმერი ჯავა ფუნქცია.
`);_Example_(`
..[page],1
..{
    ..js,
           function isGreeting(){
                console.log(" HI There ");
           } 
     ..button, Greeting,  isGreeting();
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Java Script PC":_Structure_(`
..js_pc,*JavaScript*
..js_pagecreate,*JavaScript*
..javascript_pagecreate,*JavaScript*
`);_Relative_(`
`);_Description_(`
ეს არის  სკრიპტის ელემენტი, რომეილის საშუალებით შესაძლებელია 
HTML დოკუმენტში ჩავამატოთ ნებისმერი ჯავა ფუნქცია. მოცემული 
ჯავაფუნქცია ეშვება ავტომატურად, როდესაც მოხდება იმ PAGE-ის 
შექმნა რომელშიც არის მოთავსებული მოცენმული სკრიპტის ელემენტი.
`);_Example_(`
..[page],3
..{
    ..js_pc, console.log(" Page Created ");
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Java Script PI":_Structure_(`
..js_pi,*JavaScript*
..js_pageinit,*JavaScript*
..javascript_pageinit,*JavaScript*
`);_Relative_(`
`);_Description_(`
ეს არის  სკრიპტის ელემენტი, რომეილის საშუალებით შესაძლებელია HTML 
დოკუმენტში ჩავამატოთ ნებისმერი ჯავა ფუნქცია. მოცემული ჯავაფუნქცია 
ეშვება ავტომატურად, როდესაც მოხდება იმ PAGE-ის შექმნის შემდეგ 
მისი ინიციალიზაცია,  რომელშიც არის მოთავსებული მოცენმული სკრიპტის ელემენტი.
`);_Example_(`
..[page],3
..{
    ..js_pi, console.log(" Page init");
..}
`);break;
//####################################################################
case "Event":_Structure_(`
Dispatch_Event("In_0",isData);
..if_event,event_name,*JavaScript*(Value)
`);_Relative_(`
`);_Description_(`
ჯავასკრიპტის ფუცია Dispatch_Event წარმოქმნის  event-ს. ფუნციას 
გააჩნია ორი არგუმენტი სადაც პირველი არგუმენტი event-ის სახელია 
და მეორე არგუმენტი ის ტექსტური ინფორმაცია რომელიც მიეწოდება 
event-ის მიმღებ ფუნქციებს.

..if_event - ეს არის  სკრიპტის ელემენტი რომელიც განსაზღვრავს
 იმ მოქმედებას, რომელიც უნდა შესრულდეს event - ის მოხდენის შემდეგ.

event - ის სახელი შეიძლება იყოს ნებისმიერი, ამასთან 
In_0, In_1, In_2, In_3 არის დარეზერვებული MAXIOT სისტემის მიერ.
`);_Example_(`
..[page],1
..{
	..button, Dispatch Event, Dispatch_Event("IS_Event","Event Text");
	..input_text(it1)
	..if_event, IS_Event, put_input_text('it1',Value);
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Memory":_Structure_(`
Write_Memory(Memory_Name, Text);
Read_Memory(Memory_Name);
`);_Relative_(`
`);_Description_(`
ჯავასკრიპტის Write_Memory ფუციის საშუალებით, შესაძლებელია 
Memory_Name-ის ქვეშ დავიმახსოვორთ რამე ტექსტი.

ჯავასკრიპტის Read_Memory ფუციისსაშუალებით, შესაძლებელია 
Memory_Name-ის ქვეშ დამახსოვრებული ტექსტი წაკითხვა.

Write_Memory ფუციის გამოყენებით იმფოემაციის დამახსოვრება 
ხდება უშუალოდ ბროუზერის ცვლადების მეხსიერებაში. ეს გვაძლევს 
საშუალებას რომ ვებ გვერდის გადატვირთვის შემდეგ ვებროზერის 
მეხსიერებიდან აღვადგინოთ იმფორმაცია. ეს უქციები შირად გამოიყენება 
რამე ტიპის კონფიგურაციის შესანახად.
`);_Example_(`
..[page],1
..{
	..##,2 
	..button, Write Memory,
			Write_Memory('isMEM', get_input_text('it1'));
	..input_text(it1),
	..##,2 
	..button, Read Memory,
			put_input_text('it2', Read_Memory('isMEM'));
	..input_text(it2),
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Timer":_Structure_(`
..timer,Period,*JavaScript*
`);_Relative_(`
`);_Description_(`
..timer  სკრიპტის ელემენტი საშუალებით შესაძლებელია Period-ში 
მითითებული დროის პერიოდში გავუშვათ რაიმე ჯავასქრიპტის კოდი.
`);_Example_(`
..[page],1
..{
	..input_text(it1)
	..js,var hhh = 5000;
	..timer,100,
        put_input_text('it1',hhh); 
        hhh ++;
	..button, Reset Timer,hhh = 0;
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "MaxIOT Client-side":_Structure_(`
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..header_button,name, ui-btn ui-btn-icon-notext ui-corner-all ui-icon-cloud, 
		Connect_To_Server();
	..header_button,name, ui-btn ui-btn-icon-notext ui-corner-all ui-icon-gear,
		Popup_Open('isConfig_pop');

	..js,
		function Connect_To_Server(){
			MQTT_HOST          = Read_Memory('mem_Host');
			MQTT_PORT          = Read_Memory('mem_Port');
			MQTT_DEV_ID       = Read_Memory('mem_Device_ID');
			MQTT_DEV_Name = Read_Memory('mem_Device_Name');
			if(Connect_Status === 0)  SYS_LOOP_START();
			if(Connect_Status === 1)  Page_change('3');
		}
	
	..js,
		function Refresh_isConfig(){
			put_input_text('it_pop1_Host',Read_Memory('mem_Host'));
			put_input_text('it_pop1_Port',Read_Memory('mem_Port'));
			put_input_text('it_pop1_Device_ID',Read_Memory('mem_Device_ID'));
		    put_input_text('it_pop1_Device_Name',Read_Memory('mem_Device_Name'));
		}
			
	..js_pc, Refresh_isConfig();
		
	..[pop](isConfig_pop),10px 20px
	..{
		..label,Host:
		..input_text(it_pop1_Host),
		..label,Port:
		..input_text(it_pop1_Port),
		..label,Device ID:
		..input_text(it_pop1_Device_ID),
		..label,Device Name:
		..input_text(it_pop1_Device_Name),
		..##,2 
		..button,Save,
			Write_Memory('mem_Host', 		get_input_text('it_pop1_Host'));
			Write_Memory('mem_Port', 		get_input_text('it_pop1_Port'));
			Write_Memory('mem_Device_ID', 	get_input_text('it_pop1_Device_ID'));
			Write_Memory('mem_Device_Name',  get_input_text('it_pop1_Device_Name'));
		..button,Refresh, Refresh_isConfig();
	..}	
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "MaxIOT Server-side":_Structure_(`
`);_Relative_(`
`);_Description_(`
`);_Example_(`
<1:99>
..[Page],3
..{
     ..##,2
     ..button, ON,  Out_0("1");
     ..button, OFF,Out_0("0");
    
     ..##,2
     ..input_text(it1)
     ..label,
     ..if_event, In_0, put_input_text('it1',Value);
    
     ..##,2
     ..input_text(it2)
     ..label,
     ..if_event, In_1, put_input_text('it1',Value);
..}
`);break;
//////////////////////////////////////////////////////////////////////
case "Theme":_Structure_(`
`);_Relative_(`
`);_Description_(`
`);_Example_(`
..[page],1
..{
	..button, Theme a, Theme_Change('1','a');
	..button, Theme b, Theme_Change('1','b');
	..button, Theme c, Theme_Change('1','c');
	..button, Theme d, Theme_Change('1','d');
	..button, Theme e, Theme_Change('1','e');
..}
`);break;
//////////////////////////////////////////////////////////////////////




case 2:
break;
}
}