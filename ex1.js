//1. Write a JavaScript function that reverse a number. Go to the editor
//Example x = 32243;
//Expected Output : 34223;
function reverse_a_number(n)
{
	n =(n + "");
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));
