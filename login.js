document.getElementById('btn_primary').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone_number').value;
    const pinNumber=document.getElementById('pin_number').value;
    console.log(phoneNumber, pinNumber);
    if(phoneNumber==='01849255411' && pinNumber==='5411'){
        window.location.href='contact.html';
    }
    else{
        alert('You will be missed');
    }
})