const log_container = document.getElementsByClassName('log-container')[0];
const reg_container = document.getElementsByClassName('reg-container')[0];

let log_link = document.getElementById('log-link');
let reg_link = document.getElementById('reg-link');

log_link.addEventListener('click',(e) =>{
    e.preventDefault();

    log_container.style.display = 'block';
    reg_container.style.display = 'none';
})

reg_link.addEventListener('click',(e) =>{
    e.preventDefault();

    reg_container.style.display = 'block';
    log_container.style.display = 'none';
})


// ==========================
// registration


const msg = document.getElementById('message');
const reg_btn = document.getElementById('register-btn');

const reg_username = reg_username_input.value;
const reg_password = reg_password_input.value;

reg_btn.addEventListener('click',(e) =>{
    e.preventDefault();
    const reg_username = document.getElementById('reg-username').value;
const reg_password = document.getElementById('reg-password').value;
    if(reg_username !== "" && reg_password !== ""){
        localStorage.setItem('reg_username',reg_username);
        localStorage.setItem('reg_password',reg_password);
        msg.innerText = 'Registration successful.'; 

        reg_username_input.value = "";
        reg_password_input.value = "";

    }
    else{
        msg.innerText = 'Please fill all fields';
    }
 
})