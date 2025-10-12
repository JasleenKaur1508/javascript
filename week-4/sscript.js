var dollarBox=document.getElementById("dollar")
var rupeeBox=document.getElementById("rupee")
var convertBox=document.getElementById("convert")


function convertMoney()
{
	var value=dollarBox.value
	value *=87
	rupeeBox.value=value
}
function convert()
{
	var value=rupeeBox.value
	value *=0.011494252873563218
	dollarBox.value=value
}