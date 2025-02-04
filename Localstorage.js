

function saveToLocalStorage(){

    const input = document.getElementById('Name').value;
    const input1 = document.getElementById('age').value;
    const input2 = document.getElementById('address').value;
    const input3 = document.getElementById('email').value;
    const userdata={
        Name:input,
        age:input1,
        address:input2,
        email:input3
    };
    localStorage.setItem('user data',JSON.stringify(userdata));
    alert("Data is saved")

}

const btn=document.getElementsByClassName("Add")
    btn.onclick =  saveToLocalStorage;
    btn.color
function loadToLocalStorage(){
    const storeData = localStorage.getItem('myData');
   
    const output = document.getElementById('output');
        if(storeData){
           output.textContent = "storeData = " + storeData;
   
        }
        else{
           output.textContent = "No Data Found";
   
        }
    }