
// function getInputValueById(){
//     console.log('hello');
// }
// function getInputValueById(){
//     const addmoneyss=document.getElementById('addmoney_pin').value;
//     return addmoneyss;
// }
function getInputValueById(id){
    const input_value=document.getElementById(id).value;
    const inputNumber=parseFloat(input_value);
    return inputNumber;
}
function getTextValueById(id){
    const text_value=document.getElementById(id).innerText;
    const textNumber=parseFloat(text_value);
    return textNumber;
}
document.getElementById('button_addmoney').addEventListener('click',function(){
    showSectionById('addmoney_form');
})
document.getElementById('button_cashout').addEventListener('click',function(){
    showSectionById('cashout_form');
})
document.getElementById('button_transaction').addEventListener('click',function(){
    showSectionById('transaction_form');
})