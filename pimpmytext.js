function changeSize()
{
    console.log('inside function');
    document.getElementById('text').style.fontSize="24pt";
}

function setCheckBox()
{
    var checkbox = document.querySelector('#checkBox');
    var text = document.querySelector('#text');
    if(checkbox.checked)
    {
        console.log('checked');
        text.style.fontWeight="bold";
        text.style.textDecoration="underline";
        text.style.color="lightgreen";
        text.style.textShadow="2px 2px 4px #000000";
        text.style.textDecoration="italic";
    }
}
/* Task 4.1
document.querySelector('#snoop').onclick = ()=>{
    console.log('inside snoopify');
    var text = document.querySelector('#text');
    text.value = text.value.toUpperCase()+'!';
}
*/ 
/* Task 4.2 */
document.querySelector('#snoop').onclick = ()=>{
    console.log('inside snoopify');
    var text = document.querySelector('#text');
    var parts = text.value.split('.');
    for(var i=0; i<parts.length-1; i++)
    {
        parts[i]+='-izzy';
    }
    console.log(parts);
    var newText = parts.join('.');
    text.value = newText;
}