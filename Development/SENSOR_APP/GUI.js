



function is_createP(Text,Pos_X,Pos_Y,FSize,FFamily,FColor,FWeight,FStyle){
	var obj;
	this.obj = createP(Text);
	this.obj.style('font-size', FSize);
	this.obj.style('font-family', FFamily);
	this.obj.style('color', FColor);
	this.obj.style('font-weight', FWeight);
	this.obj.style('font-style', FStyle)
	this.obj.position(Pos_X, Pos_Y);
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}	
}



/**
'border-style'
dotted - Defines a dotted border
dashed - Defines a dashed border
solid - Defines a solid border
double - Defines a double border
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value
inset - Defines a 3D inset border. The effect depends on the border-color value
outset - Defines a 3D outset border. The effect depends on the border-color value
none - Defines no border
hidden - Defines a hidden border
**/
function is_createInput2(Text,Pos_X,Pos_Y,Width,TextAlign,Background_Color,border_style, FSize,FFamily,FColor,FWeight,FStyle,Disabled){
	var obj;
	this.obj = createP(Text);
	this.obj = createInput(Text);
	this.obj.style('width', Width);
	this.obj.style('textAlign', TextAlign);//RIGHT,CENTER,LEFT
	
	this.obj.style('border-style',border_style);//hidden none outset inset ridge groove double solid dashed dotted
	
	this.obj.style('background-color', '#ffffff');
	this.obj.position(Pos_X, Pos_Y);
	
	this.obj.style('font-size', FSize);
	this.obj.style('font-family', FFamily);
	this.obj.style('font-color', FColor);
	this.obj.style('font-weight', FWeight);
	this.obj.style('font-style', FStyle)
	
	
	this.PutValue = function(Text) {this.obj.value(Text);}	
	this.GetValue = function() {return this.obj.value();}
	this.background = function(color) {this.obj.style('background-color', color);}	

	if (Disabled===0) this.obj.attribute('disabled', '');
	if (Disabled===1) this.obj.removeAttribute('disabled');
	this.Disable = function() {this.obj.attribute('disabled', '');}
	this.Enable  = function() {this.obj.removeAttribute('disabled');}
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}	
}
function is_createInput2_test()
{
	var Tmp1x = [];
	var G_X = 900;
	var G_Y = 40;
	Tmp1I 	   = new is_createImg('pic/00_0.jpg',G_X-10,G_Y-10,'365px','320px',isNull,1);	
	
	;//hidden none outset inset ridge groove double solid dashed dotted
	Tmp1x[0] = new is_createInput2(' Test hidden ',G_X,G_Y, '120px','LEFT','#DAF7A6','hidden','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[1] = new is_createInput2(' Test none ',G_X,G_Y, '120px','LEFT','#DAF7A6','none','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[2] = new is_createInput2(' Test outset ',G_X,G_Y, '120px','LEFT','#DAF7A6','outset','14px','Arial','bold','italic',1);G_Y += 30;;
	Tmp1x[3] = new is_createInput2(' Test inset ',G_X,G_Y, '120px','LEFT','#DAF7A6','inset','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[4] = new is_createInput2(' Test ridge ',G_X,G_Y, '120px','LEFT','#DAF7A6','ridge','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[5] = new is_createInput2(' Test groove ',G_X,G_Y, '120px','LEFT','#DAF7A6','groove','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[6] = new is_createInput2(' Test double ',G_X,G_Y, '120px','LEFT','#DAF7A6','double','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[7] = new is_createInput2(' Test solid ',G_X,G_Y, '120px','LEFT','#DAF7A6','solid','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[8] = new is_createInput2(' Test dashed ',G_X,G_Y, '120px','LEFT','#DAF7A6','dashed','14px','Arial','bold','italic',1);G_Y += 30;
	Tmp1x[9] = new is_createInput2(' Test dotted ',G_X,G_Y, '120px','LEFT','#DAF7A6','dotted','14px','Arial','bold','italic',1);G_Y += 30;
} 










function is_createInput(Text,Pos_X,Pos_Y,Width,TextAlign,Background_Color,border_style, Disabled){
	var obj;
	this.obj = createP(Text);
	this.obj = createInput(Text);
	this.obj.style('width', Width);
	this.obj.style('textAlign', TextAlign);//RIGHT,CENTER,LEFT
	
	this.obj.style('border-style',border_style);
	
	this.obj.style('background-color', '#ffffff');
	this.obj.position(Pos_X, Pos_Y);
	this.PutValue = function(Text) {this.obj.value(Text);}	
	this.GetValue = function() {return this.obj.value();}
	this.background = function(color) {this.obj.style('background-color', color);}	

	if (Disabled===0) this.obj.attribute('disabled', '');
	if (Disabled===1) this.obj.removeAttribute('disabled');
	this.Disable = function() {this.obj.attribute('disabled', '');}
	this.Enable  = function() {this.obj.removeAttribute('disabled');}
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}	
}



function is_createButton(Text,Pos_X,Pos_Y,Width,height,Func,Disabled){
	var obj;
	this.obj = createButton(Text);
	this.obj.mousePressed(Func);
	this.obj.style('width',  Width);
	this.obj.style('height', height);
	this.obj.position(Pos_X, Pos_Y);

	if (Disabled===0) this.obj.attribute('disabled', '');
	if (Disabled===1) this.obj.removeAttribute('disabled');
	this.Disable = function() {this.obj.attribute('disabled', '');}
	this.Enable  = function() {this.obj.removeAttribute('disabled');}
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}
}
//new is_createProgress(GUI_X+100,GUI_Y+24,"177px","0px","100","0");
function is_createProgress(Pos_X,Pos_Y,Width,Height,Max,Value){
	var obj;
	this.obj = createElement('progress', '0');
    this.obj.style('width', Width);
	this.obj.style('height',Height);
    this.obj.attribute("max", Max);
    this.obj.attribute("value",Value);
	this.obj.position(Pos_X,Pos_Y);
	this.PutValue = function(value) {this.obj.value(value);}
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}
}

function is_createTextarea(Text,Pos_X,Pos_Y,Width,Height,Disabled){
	var obj;
    this.obj = createElement('textarea', Text);
    this.obj.show();
	this.obj.position(Pos_X, Pos_Y);
	this.obj.style('width', Width);
	this.obj.style('height', Height);
	this.PutValue = function(data) {this.obj.value(data);}
	if (Disabled===0) this.obj.attribute('disabled', '');
	if (Disabled===1) this.obj.removeAttribute('disabled');
	this.Disable = function() {this.obj.attribute('disabled', '');}
	this.Enable  = function() {this.obj.removeAttribute('disabled');}
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}	
}

function is_createCheckbox(Text,Pos_X,Pos_Y,FSize,FFamily,FColor,FWeight,FStyle,Func,Val,Disabled){
	var obj;
	this.obj = createCheckbox(Text, Val);
	this.obj.changed(Func);
	this.obj.position(Pos_X, Pos_Y);
	this.obj.style('font-size', FSize);
	this.obj.style('font-family', FFamily);
	this.obj.style('font-color', FColor);
	this.obj.style('font-weight', FWeight);
	this.obj.style('font-style', FStyle)
	//this.PutValue = function(Value) {this.obj.value(Text);}	
	this.GetValue = function() {return this.obj.checked();}
	
	if (Disabled===0) this.obj.attribute('disabled', '');
	if (Disabled===1) this.obj.removeAttribute('disabled');
	this.Disable = function() {this.obj.attribute('disabled', '');}
	this.Enable  = function() {this.obj.removeAttribute('disabled');}
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}
}

function is_createImg(FilePath,Pos_X,Pos_Y,Width,Height,func,show){
	var obj;
    this.obj = createImg(FilePath);
    //this.obj.show();
	this.obj.position(Pos_X, Pos_Y);
	this.obj.style('width', Width);
	this.obj.style('height', Height);
	if (show===1) this.obj.show();
	if (show===0) this.obj.hide();
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}
	//this.hide = function() {this.obj.hide();}
}
function is_createFileInput(Pos_X,Pos_Y,Width,Height,Func){
	var obj;
	this.obj = createFileInput(Func);
    this.obj.style('width', Width);
	this.obj.style('height',Height);
	this.obj.position(Pos_X,Pos_Y);
	this.show = function(data) {if(data===1)this.obj.show();else this.obj.hide();}
}

function isNull() {}






