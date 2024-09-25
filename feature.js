// toggle features
function showSectionById(id){
    document.getElementById('addmoney_form').classList.add('hidden');
    document.getElementById('cashout_form').classList.add('hidden');
    document.getElementById('transaction_form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
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