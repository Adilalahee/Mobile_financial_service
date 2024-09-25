// function for add money
document.getElementById('addmoney_btn').addEventListener('click',function(event){
    event.preventDefault()
    // const addMoneyinput=document.getElementById('addmoney_input').value;
    // const addMoneypin=document.getElementById('addmoney_pin').value;
    // console.log(addMoneyinput,addMoneypin)
    // using shared js
    // getInputValueById();
    // const addmoneys=getInputValueById();
    // console.log("here is your pin", addmoneys);
    const inputpin=getInputValueById('addmoney_pin');
    const inputmoney=getInputValueById('addmoney_input');
    if(isNaN(inputmoney)){
        alert('Failed');
        return;
    }
    if(inputpin===1234){
        const currentBalance=getTextValueById('current_balance');
        const newBalance=currentBalance+inputmoney;
        document.getElementById('current_balance').innerText=newBalance;

        const p=document.createElement('p');
        p.innerText=`Added ${inputmoney} Tk. Balance ${newBalance}`;
        console.log(p);
        document.getElementById('transaction_container').appendChild(p);
    }
    else{
        alert('Wrong Credintials')
    }
})
// function for cashout
document.getElementById('cashout_btn').addEventListener('click',function(event){
    event.preventDefault()
    const inputpin=getInputValueById('cashout_pin');
    const inputmoney=getInputValueById('cashout_input');
    // console.log(inputpin,inputmoney)
    if(isNaN(inputmoney)){
        alert('Failed');
        return;
    }
    if(inputpin===1234){
        const currentBalance=getTextValueById('current_balance');
        if(inputmoney>currentBalance){
            alert('Exceeded');
            return;
        }
        const newBalance=currentBalance-inputmoney;

        document.getElementById('current_balance').innerText=newBalance;

       const div=document.createElement('div');
       div.classList.add('bg-yellow-300');
       div.innerHTML=`
       <h4 class="font-bold">Cashout</h4>
       <p>${inputmoney} Withdraw. Remaining balance ${newBalance} </P>
       `
       document.getElementById('transaction_container').appendChild(div);
    }
    else{
        alert('Wrong Credintials')
    }
})

