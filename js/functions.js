function copyCode(id){
    /* Get the text field */
    var code = document.getElementById(id);
  
    const inputText = document.createElement('textarea');
    inputText.value = code.textContent;
    document.body.appendChild(inputText);
  
    /* Select the text field */
    inputText.select();
    inputText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    document.body.removeChild(inputText);
}