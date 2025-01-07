document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', darkMode);
  });
  
  function darkMode() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
  }

  
const app = {

    init: function() {

      let textField = document.getElementById('text');
       let numberField = document.getElementById('number_lines');
       textField.addEventListener('keyup', app.handlerKeyUp);
       numberField.addEventListener('keyup', app.handlerKeyUp);
    },

    handlerKeyUp: function() {

        let sentenceToWrite = document.getElementById('text').value;
        let numberToWrite = document.getElementById('number_lines').value;
        
        let boards = document.getElementsByClassName('text-board');
        let myboard = boards[0];
        let mytext = "";
        
        for (let i = 0; i < numberToWrite; i++) { 
            let newP = document.createElement('p').textContent = sentenceToWrite;
            mytext = mytext + newP + '<br>';
        }

        myboard.innerHTML = mytext;
    }
}

document.addEventListener('DOMContentLoaded', app.init);

document.getElementById("button").addEventListener("click", e=>{
	responsiveVoice.speak(document.getElementById('text').value,"French Female");
  
})