const codeInput = document.getElementById('codeInput');
const runBtn = document.getElementById('runBtn');
const consoleBox = document.getElementById('console');

//Custom console.log
function customLog(message){

    const div = document.createElement('div');
    div.classList.add('log');

    div.textContent = message;

    consoleBox.appendChild(div);
}

//Run Code
runBtn.addEventListener("click", function(){

    consoleBox.innerHTML = "";

    //Backup original console.log
    const originalLog = console.log;

    //Override console.log
    console.log = function(message){
        customLog(message);
    };

    try{

        //Execute usercode
        eval(codeInput.value);

    } catch(error){

        const err = document.createElement('div');
        err.classList.add('error');

        err.textContent = error;

        consoleBox.appendChild(err);
    }

    //Restore original console.log
    console.log = originalLog;
});