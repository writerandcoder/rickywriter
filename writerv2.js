// Exports backup json file
function exportLocalStorage() {
  const localStorageData = { ...localStorage };
  const serializedData = JSON.stringify(localStorageData);
  const blob = new Blob([serializedData], { type: "application/json" });

  // Create a download link for the exported data
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "localStorageData.json";
  a.click();
}

// Imports backup json file
function importLocalStorage(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const importedData = JSON.parse(e.target.result);

      // Clear existing localStorage
      localStorage.clear();

      // Set imported data in localStorage
      for (const key in importedData) {
        if (importedData.hasOwnProperty(key)) {
          localStorage.setItem(key, importedData[key]);
        }
      }

      alert("Data imported successfully!");
    };

    reader.readAsText(file);
  }
}

//Deletes all site data
function confirmAndClearLocalStorage() {
  var confirmationInput = prompt("To clear local storage, type 'DELETE':");
  var confirmationText = "DELETE";

  if (confirmationInput === confirmationText) {
    var itemsBeforeClear = localStorage.length;
    alert("Number of items before clearing: " + itemsBeforeClear);

    localStorage.clear();

    var itemsAfterClear = localStorage.length;
    alert("Number of items after clearing: " + itemsAfterClear);
  } else {
    alert("Confirmation text did not match. Local Storage was not cleared.");
  }
}






if(localStorage.getItem('gameon') === null || localStorage.getItem('gameon') == "" ) {
  localStorage.setItem('gameon', '1'); 
}

if(localStorage.getItem('mode') === null || localStorage.getItem('mode') == "default" ) {
  localStorage.setItem('mode', 'medium');
}

if(localStorage.getItem('game') === null || localStorage.getItem('game') == "" ) {
  localStorage.setItem('game', '1');
}
if(localStorage.getItem('rNotes') === null || localStorage.getItem('rNotes') === "" ) {
  localStorage.setItem('rNotes', 'Notes.<ul> <li></li></ul>');
}
if(localStorage.getItem('docSeen1') === null || localStorage.getItem('docSeen1') == "" ) {
if(localStorage.getItem('docName1') === null || localStorage.getItem('docName1') == "" ) {
  localStorage.setItem('docName1', 'About Freewriting');
  localStorage.setItem("docItem1", "What is freewriting:\n\n 'Freewriting is a technique in which the author writes their thoughts quickly and continuously, without worrying about form, style, or even grammar. Alongside brainstorming, freewriting is typically used early in the writing process to collect and manifest one's thoughts.' - Grammarly Blog.\n\n Freewriting is a way of practising the art of writing by capturing your train of thought and putting it down on the page before those thoughts disappear into the ether.\n\n With freewriting, no attention should be paid to proper grammar, spelling mistakes, or saying things exactly the right way. It's what writing a first draft should be about, dumping down your thoughts on a subject or putting your story on the page to be later crafted through editing into something worth reading.\n\n Some people edit while they write, but freewriting is about keeping up with your brain when you kick into gear and let all those ideas and narratives manifest. \n\n  It can free you up and make you a better, more thorough and ultimately more prolific writer. And is great for beginners to help them get past the blocks that must be overcome if they wish to call themselves a writer.\n\n It's not about perfection, it's about allowing yourself to find your flow as a writer. Even if that means writing complete rubbish, or just writing nonsense, it's still writing.  Which is a whole lot more productive than staring at a blank screen.\n\n Allow yourself to write rubbish!!!!\n\n The rickywriter built-in game:\n\n The app allows you to gamify the practice of freewriting or writing first drafts. The app's goal is to help you get started and keep you writing. \n\n Gameplay: You lose lives when you stop typing, you gain points for each word you write and for hitting writing milestones like your first 125 words. If you lose all your lives, the game is over, but you get to keep what you've written. It records your high score so you can try to beat that score next time.");
  localStorage.setItem('docSeen1', 'Seen');
}
}

if(localStorage.getItem('docSeen2') === null || localStorage.getItem('docSeen2') == "" ) {
if(localStorage.getItem('docName2') === null || localStorage.getItem('docName2') == "" ) {
  localStorage.setItem('docName2', '🪶 My Journal');
  localStorage.setItem("docItem2", "The concept behind this diary document is to document your life regularly.\n\n Once you've finished writing an entry in your diary document, you save it into a folder of your writing on your device. (which should be backed up.) After you save your writing you can clear the document of that diary entry, ready for your next diary entry. Upon downloading and saving the entry the filename of the document will be date-stamped for future reference.");
  localStorage.setItem('docSeen2', 'Seen');
}}

if(localStorage.getItem('topScore') === null || localStorage.getItem('topScore') == "" ) {
 
} else {
  const ts = document.querySelector("#topScore");
  ts.innerHTML = localStorage.getItem('topScore');

}

if(localStorage.getItem('timeScore') === null || localStorage.getItem('timeScore') == "" ) {
 
} else {
  const ts = document.querySelector("#timeScore");
  ts.innerHTML = localStorage.getItem('timeScore');

}

if(localStorage.getItem('WtimeScore') === null || localStorage.getItem('WtimeScore') == "" ) {
 
} else {
  const ts = document.querySelector("#WtimeScore");
  ts.innerHTML = localStorage.getItem('WtimeScore');

}




var currentList = 0;
var wordst = 0;
let timerId1, timerId2;
var playing = 0;
var atround = 125;
let hearts = 3; 
let timer;
let score = 0;
let startTime;
let elapsedTime = 0;
let timerInterval;
let intTime = 0;
var Notice = '';
let timerScore, timerLife, timerDing;
var gameOn = 1;
var clickTimeout;
var aboutText = 1;
var startcount = 0
var ding = 0;
let tElapsedTimeMillis = 0;




//starter (Home Page)

function runStarter(){
  clearTimeout(timerDing);
  ding = 0;
  currentList = 0;
  const item = localStorage.getItem('rNotes');
  const righto = document.getElementById('right0');
  righto.innerHTML = item;
  const divl = document.getElementById('div1');
  divl.innerHTML = "";
  var Burs = "Online Writing App w/ Built-in Freewriting Game!"
  var atabname = document.querySelector("#tabname");
  atabname.textContent = Burs;
  updateTimeScore();
  showFront();
 
}

function showFront(){

  document.querySelector('#help').classList.remove("hidden");
  document.getElementById("gameArea").classList.remove("gam");
  document.getElementById("tabname").classList.add("tabnamex");
  document.getElementById("tabbut").classList.remove("hidden");
  document.getElementById("frontStat").classList.remove("hidden");
  document.querySelector('.docs').classList.add("hidden")
  document.getElementById("div1").classList.add("hidden");
  document.getElementById("div0").classList.remove("hidden");
  document.getElementById("gameArea").classList.add("hidden");
  document.querySelector('.dgo').classList.add("hidden");
  document.querySelector('.minus').classList.add("hidden");
  document.querySelector('.restext').classList.add("hidden");
  document.querySelector('.editor').classList.add("hidden");
  document.querySelector('.plus').classList.add("hidden");
  document.querySelector('.clear').classList.add("hidden");
  document.querySelector('.delete').classList.add("hidden");
  document.querySelector('.about').classList.remove("hidden");
  document.querySelector('.learn').classList.remove("hidden");
  document.querySelector('.new').classList.remove("hidden");
  document.querySelector('.ugo').classList.add("hidden");
  document.querySelector('.free').classList.add("hidden");

  showList();
  document.documentElement.scrollTop = 0;
}




// Runner (Document Page)

function runDoc(docNo) {

     ding = 0;
      var storeName = 'docName' + docNo;
      var storeList = 'docItem' + docNo;
      var storeNotes = 'docNotes' + docNo;
      const Namo = localStorage.getItem(storeName);
      const Liso = localStorage.getItem(storeList);
      const Noto = localStorage.getItem(storeNotes);
      const righteo = document.getElementById('right0');
      const diveo = document.getElementById('div1');
      const atabname = document.querySelector("#tabname");
      atabname.textContent = "  " + Namo;
      righteo.innerHTML = Noto;
      diveo.innerHTML = Liso;
      currentList = docNo;
      updateTimeScore();
    updateWordCount();
  
      clickTimeout = null;
      intTime = 0;
      clearInterval(timerInterval);
      elapsedTime = 0;
      updateTimer(0);
      clearTimeout(timerId1);
      clearTimeout(timerId2);
      score = 0;
      clearTimeout(timerScore);
clearInterval(timerLife);
clearTimeout(timerDing);

      document.getElementById('tscorebox').innerHTML = 0;
      document.getElementById('scorebox').innerHTML = 0;
showList();
showPage();
document.documentElement.scrollTop = 0;
window.scrollTo(0, 0);
    }



function showPage(){
  document.getElementById("gameArea").classList.remove("gami");
  document.getElementById("tabname").classList.remove("tabnamex");
  document.getElementById("tabbut").classList.add("hidden");
  document.getElementById("gameArea").classList.add("gam");
  document.querySelector('#ender').classList.add("hidden");
  document.getElementById("scoreC").classList.add("hidden");
  document.getElementById("scorebox").classList.add("hidden");
  document.getElementById("tscoreC").classList.add("hidden");
  document.getElementById("tscorebox").classList.add("hidden");
  document.querySelector('#frontStat').classList.add("hidden");
  document.querySelector('.docs').classList.remove("hidden");
  document.querySelector('.minus').classList.remove("hidden");
  document.querySelector('.restext').classList.remove("hidden");
  document.querySelector('.plus').classList.remove("hidden");
  document.querySelector('.clear').classList.remove("hidden");
  document.querySelector('.delete').classList.remove("hidden");
  document.querySelector('.learn').classList.add("hidden");
  document.querySelector('.about').classList.add("hidden");
  document.querySelector('.dgo').classList.remove("hidden");
  document.querySelector('.free').classList.remove("hidden");
  document.querySelector('.ugo').classList.remove("hidden");
  document.getElementById("gameArea").classList.remove("hidden");
  document.getElementById("div1").classList.remove("hidden");
  document.querySelector('.editor').classList.remove("hidden");

  if (localStorage.getItem('gameon') == '1') {
  document.querySelector('#play').classList.remove("hidden");
  document.querySelector('#model').classList.remove("hidden");
  
  } else {
document.querySelector('#play').classList.add("hidden");
document.querySelector('#model').classList.add("hidden"); 
  }
loadMode();
document.documentElement.scrollTop = 0;
document.getElementById('div1').focus();
}


function showGame(){
  document.querySelector('#help').classList.add("hidden");
  document.querySelector('.editor').classList.add("hidden");
  document.querySelector('.dgo').classList.add("hidden");
  document.querySelector('.minus').classList.add("hidden");
  document.querySelector('.new').classList.add("hidden");
  document.querySelector('.ugo').classList.add("hidden");
  document.querySelector('.restext').classList.add("hidden");
  document.querySelector('.plus').classList.add("hidden");
  document.querySelector('.clear').classList.add("hidden");
  document.querySelector('.delete').classList.add("hidden");
  document.querySelector('.about').classList.add("hidden");
  document.querySelector('.docs').classList.add("hidden");
  document.getElementById("creator").classList.add("hidden");
  document.getElementById("noplay").classList.remove("hidden");
  document.getElementById("livesC").classList.remove("hidden");
  document.getElementById('scorebox').innerHTML = score;
  document.getElementById("scoreC").classList.remove("hidden");
  document.getElementById("scorebox").classList.remove("hidden");
  document.getElementById("tscoreC").classList.add("hidden");
  document.getElementById("tscorebox").classList.add("hidden");
  document.getElementById("play").classList.add("hidden");
  document.getElementById("model").classList.add("hidden");
  document.querySelector('#div0').classList.add("hidden");
  document.querySelector('#menuArea').classList.add("hidden");
  document.querySelector('#about').classList.add("hidden");
  const div1 = document.querySelector('#div1');
  div1.focus();
 window.scrollTo(0, 0);
 
}

function playG(){
  if (localStorage.getItem('game') == 1) {
    updateTimeScore();
    clearTimeout(timerScore);
    clearTimeout(timerLife);
    clearTimeout(timerId1);
    clearTimeout(timerId2);

   
  document.documentElement.requestFullscreen(); 
  document.querySelector('.free').title = 'Minimise Sceen';  

       playing = 1;
  
       updateWordCount();
       startcount = wordst;
      score = 0;
showGame();

      runTimer(2);



  };
}


function stopG(){
  Notice = 'Game Over...';

  document.exitFullscreen();
  document.querySelector('.free').title = 'Fullscreen';

      playing = 0;
      runTimer('0');
      intTime = 0;
      hearts = 3;
      document.getElementById("hearts").innerHTML = "&#10084;&#10084;&#10084;";
      // Pause the timer
  clearTimeout(timerScore);
  // Pause the timer
  clearTimeout(timerLife);
  clearTimeout(timerId1);
  clearTimeout(timerId2);
  var gword = wordst - startcount;
  const wordCount1 = document.getElementById('wordCount');
  wordCount1.innerText = gword + " words |";
  document.getElementById('tscorebox').innerHTML = score;
  document.getElementById('scorebox').innerHTML = 0;
  document.getElementById("scoreC").classList.add("hidden");
  document.getElementById("scorebox").classList.add("hidden");
  document.getElementById("tscoreC").classList.remove("hidden");
  document.getElementById("wordCount").classList.remove("hidden");
  document.getElementById("tscorebox").classList.remove("hidden");
      document.getElementById("creator").classList.remove("hidden");
      document.getElementById("noplay").classList.add("hidden");
      document.getElementById("livesC").classList.add("hidden");
      document.getElementById("play").classList.add("hidden");
      document.getElementById("model").classList.remove("hidden");
      document.querySelector('#div0').classList.remove("hidden");
      document.querySelector('#ender').classList.remove("hidden");
      if (aboutText == 1){
        document.querySelector('#about').classList.remove("hidden");    
      }

      if(localStorage.getItem('topScore') === null || localStorage.getItem('topScore') == "" ) {
        localStorage.setItem('topScore', score);
        const ts = document.querySelector("#topScore");
        ts.innerHTML = localStorage.getItem('topScore');
      } else if (localStorage.getItem('topScore') < score ) {
          localStorage.setItem('topScore', score);
          const ts = document.querySelector("#topScore");
          ts.innerHTML = localStorage.getItem('topScore');
        }
      
        score = 0;
      runStarter();
      document.getElementById("gameArea").classList.add("gami");
      runNotice();
     
        
    
         document.getElementById("gameArea").classList.add("hidden");
      

     
    
    }



    
    const gamerR = document.getElementById('topScre');  
    const gamerS = document.getElementById('topScore');
    const gamerT = document.getElementById('gameo');

    if(localStorage.getItem('gameon') == 1){
      gamerT.innerHTML = 'On';
      gamerT.classList.remove('toggleoff');
      gamerT.classList.add('toggleon');


    } else {
      gamerT.innerHTML = 'Off';
      gamerT.classList.remove('toggleon');
      gamerT.classList.add('toggleoff'); 
      gamerR.classList.add('hidden');
      gamerS.classList.add('hidden'); 

    }

function gameFunction(what){

  
      if (what == 1){
  
        if(localStorage.getItem('gameon') == 1){
          localStorage.setItem('gameon', '0');
          gamerT.innerHTML = 'Off';
          gamerT.classList.remove('toggleon');
          gamerT.classList.add('toggleoff');
          gamerR.classList.add('hidden');
          gamerS.classList.add('hidden'); 
  
        } else {
          localStorage.setItem('gameon', '1');
          gamerT.innerHTML = 'On';
          gamerT.classList.remove('toggleoff');
          gamerT.classList.add('toggleon');
          gamerR.classList.remove('hidden');
          gamerS.classList.remove('hidden'); 
        }
        
      }
  
  }

function loadMode(what){
  let r = what;

  if (r == 'easy' || r == 'medium' || r == 'hard' || r == 'insane') {
    localStorage.setItem('mode', what);
  } 

    
    document.getElementById("easy").classList.add("hidden");
    document.getElementById("medium").classList.add("hidden");
    document.getElementById("hard").classList.add("hidden");
    document.getElementById("insane").classList.add("hidden");

    if (localStorage.getItem('gameon') == 1) {
      if (whichMode !== null) {
      var whichMode = localStorage.getItem('mode');

      document.getElementById(whichMode).classList.remove("hidden");
      
      }
      }
 
  
}

 








const wordCount = document.getElementById('wordCount');

      
function updateWordCount() {
    var tabno =  'div1';
    var editableDiv = document.getElementById(tabno);
  var text = editableDiv.innerText;
  const words = text.trim().split(/\s+/);
  if (words.length == 1) {
     wordCount.innerText = "";
     startcount = 0;
  } else {
     wordCount.innerText =  words.length + " words | ";
     wordst = words.length
  }
 
}



function showList() {
  
  const lol = document.getElementById('liSt');
  lol.textContent = '';
 
  const listContainer = document.getElementById('liSt');
  const ul = document.createElement('ul');

  
  for (let i = 1; i <= 30; i++) {
    const task = localStorage.getItem('docName' + i);
    
    const wordt = localStorage.getItem('docItem' + i);
    var wordc = "0 words";
    if (wordt === "" || wordt === null) {
     
    } else {
    const words = wordt.split(' ');
    wordc = words.length + " words";
    }
    if (task) {
      const listItem = document.createElement('li');
      const coreSpan = document.createElement('span');
      coreSpan.innerText = "〰️";
      coreSpan.title = "Rename: " + task; // Add a title to the coreSpan element
      coreSpan.style.cursor = 'pointer';
      coreSpan.addEventListener('click', function() {
        reName(i);
      });
      coreSpan.classList.add('docC');
      listItem.appendChild(coreSpan);

      const boreSpan = document.createElement('span');
      boreSpan.innerText = task;
      boreSpan.style.cursor = 'pointer';
      boreSpan.title = "[ Open ]"; // Add a title to the coreSpan element
      boreSpan.addEventListener('click', function() {
        runDoc(i);
      });
      boreSpan.classList.add('docN');
      listItem.appendChild(boreSpan); 
      
   const doreSpan = document.createElement('span');
      doreSpan.innerText = wordc;
      doreSpan.classList.add('Runs');
      listItem.appendChild(doreSpan); 
      ul.appendChild(listItem);
      
    }  
  }
  
  listContainer.appendChild(ul);
  
  }

  const editor = document.querySelector("grammarly-editor-plugin");
  editor.config = {
    suggestionCards: "off",
    underlines: "off"
  };
var ed = 0;
//  document.getElementById('div1').setAttribute('data-gramm', 'false');
  
  // Listen for full screen change
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      if (ed == 1){
      document.getElementById("div1").classList.add("div1a");
      document.getElementById("div1").classList.add("textz");
      document.getElementById("div1").classList.remove("div1b");
      document.getElementById("shell").classList.remove("shell");
      document.getElementById("about").classList.remove("hidden");
      document.getElementById("help").classList.remove("hidden");
      document.getElementById("creator").classList.remove("hidden");
      document.getElementById("gameArea").classList.remove("hidden");
      document.getElementById("div0").classList.remove("hidden");
      const editor = document.querySelector("grammarly-editor-plugin");
      editor.config = {
        suggestionCards: "off",
        underlines: "off"
      };
      document.getElementById('div1').setAttribute('data-gramm', 'false');


      ed = 0;
    }
    }
  });


  function reName(docNo){

    var changeo = 'docName' + docNo;
let listo = prompt("Please enter the new name of this document.");
if (listo === "" || listo === null) {

} else {  
  localStorage.setItem(changeo, listo);
  runStarter();
}
  }


  const edito = document.querySelector('.editor');
     
  edito.addEventListener('click', function(e) {
    document.getElementById("div1").classList.remove("div1a");
    document.getElementById("div1").classList.remove("textz");
    document.getElementById("div1").classList.add("div1b");
    document.getElementById("shell").classList.add("shell");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("help").classList.add("hidden");
    document.getElementById("creator").classList.add("hidden");
    document.getElementById("gameArea").classList.add("hidden");
    document.getElementById("div0").classList.add("hidden");
 
    const editor = document.querySelector("grammarly-editor-plugin");
    editor.config = {
      suggestionCards: "on",
      underlines: "on"
    };
   //  document.getElementById('div1').setAttribute('data-gramm', 'true');

    document.documentElement.requestFullscreen();

    ed = 1;
  });



  const newo = document.querySelector('.new');
     
  newo.addEventListener('click', function(e) {
    let listNo = 1;
    while (listNo <= 30) {
      const taskKey = 'docName' + listNo;
      const taskValue = localStorage.getItem(taskKey);
      if (taskValue == null || taskValue === '') {
        // Empty or missing localStorage item found
        const NewItemNo = listNo;
        createNewList(NewItemNo);
        break;
      } else {
        // Non-empty localStorage item found, continue searching
        listNo++;
      }
    }
  });
  
  
  function createNewList(ListNum) {
    var storeName = 'docName' + ListNum;
    var storeList = 'docItem' + ListNum;
    var storeNotes = 'docNotes' + ListNum;
    let listname = prompt("Please enter the name of your document:");
  if (listname === "" || listname === null) {
    // do nothing
  } else {
  var empty1 = ""
  var empty2 = "Notes.<ul> <li></li></ul>"
    localStorage.setItem(storeName, listname);
    localStorage.setItem(storeList, empty1);
    localStorage.setItem(storeNotes, empty2);
runDoc(ListNum);
  }
  }
 













  
  function resetTS(){
    const reset = window.prompt("Reset high score? Type 'ok' to confirm.");

if (reset === "ok") {
  // Reset the high score
  localStorage.setItem('topScore', 0);
  const ts = document.querySelector("#topScore");
  ts.innerHTML = "0";
}
  }

  function resetT(){
    const reset = window.prompt("Reset high score? Type 'ok' to confirm.");

if (reset === "ok") {
  // Reset the high score
  localStorage.setItem("allTimeElapsed", 0);
  const ts = document.querySelector("#timeScore");
  ts.innerHTML = "00.00";
}
  }

  function resetW(){
    const reset = window.prompt("Reset high score? Type 'ok' to confirm.");

if (reset === "ok") {
  // Reset the high score
  localStorage.setItem('Week', 0);
  const ts = document.querySelector("#WtimeScore");
  ts.innerHTML = "00.00";
}
  }







  
  function deleteDoc(){   
    
    let input = prompt("Type the letter d or D then click OK to delete document item. Type d or D here");
    // If the user clicks Cancel or doesn't enter "D" or "d", do nothing
    if (input === null || input.toLowerCase() !== "d") {
     
      return;
    } else {
     const tdel = currentList;
    const rightooo = document.getElementById('div1');
    rightooo.innerHTML = "";
    currentList = 0;
    var rstoreName = 'docName' + tdel;
    var rstoreList = 'docItem' + tdel;
    var rstoreNotes = 'docNotes' + tdel;
  
    const Nameo = localStorage.getItem(rstoreName);
  

  
  
    // If the user enters "D" or "d", delete the contents of the editable div with the id "div1"
    localStorage.removeItem(rstoreName);
    localStorage.removeItem(rstoreList);
    localStorage.removeItem(rstoreNotes);

    runStarter();
  }

  }

  const clearo = document.querySelector('.clear');
  
  clearo.addEventListener('click', function(e) {

    e.preventDefault();
  
    let input = prompt("Type the letter d or D then click OK to clear text from document", "Type d or D here");
    // If the user clicks Cancel or doesn't enter "D" or "d", do nothing
    if (input === null || input.toLowerCase() !== "d") {
     
      return;
    }
    var numl = currentList;
    const rightooo = document.getElementById('div1');
    rightooo.innerHTML = "";
    var rstoreListed = 'docItem' + numl;
    localStorage.removeItem(rstoreListed);
  


  });
  
  
 
  

     


        const fileInput = document.getElementById('file-input');
const daDiv = document.getElementById('div1');
const importButton = document.querySelector('.ugo');

importButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  const nimble = document.getElementById('div1').innerText;
  reader.readAsText(file);
  reader.onload = () => {
    
    daDiv.textContent = nimble + "\n\n" + reader.result;

// Get the element with the event listener
const myF = document.getElementById("div1");

// Define the event
const myEvent = new Event("input");

// Trigger the event on the element
myF.dispatchEvent(myEvent);

  };
});

     
     
     const gogo1 = document.querySelector('.docs');
  
     gogo1.addEventListener('click', function(e) {
      e.preventDefault();
      runStarter();


     });
     
     
     var size = localStorage.getItem('fontSize') || 16;
     var minSize = 6;
     var maxSize = 36;
     var div = document.getElementById('div1');
     div.style.fontSize = size + "px";
     
     const pluso = document.querySelector('.plus');
     
     pluso.addEventListener('click', function(e) {
       e.preventDefault();
       if (size < maxSize) {
         size++;
         div.style.fontSize = size + "px";
         localStorage.setItem('fontSize', size);
       }
     });
     
     const mino = document.querySelector('.minus');
     
     mino.addEventListener('click', function(e) {
       e.preventDefault();
       if (size > minSize) {
         size--;
         div.style.fontSize = size + "px";
         localStorage.setItem('fontSize', size);
       }
     });
     
     const reso = document.querySelector('.restext');
     
     reso.addEventListener('click', function(e) {
       e.preventDefault();
       size = 16;
       div.style.fontSize = size + "px";
       localStorage.setItem('fontSize', size);
     });


     const fs = document.querySelector('.free');
     
     fs.addEventListener('click', function(e) {
       e.preventDefault();
       if (window.innerHeight == screen.height) {
        document.exitFullscreen();
        document.querySelector('.free').title = 'Fullscreen';
      } else {
         document.documentElement.requestFullscreen();
         document.querySelector('.free').title = 'Minimise Screen';
      }
       
     });
     
     
     


      var divly = document.getElementById("div1");
  
      divly.addEventListener("input", function(event) {
        if (ding == 0){
        ding = 1;
        timerDing = setInterval(function() {
          const audio = new Audio("bell.mp3");
          audio.play();
          }, 300000);
}
     if(ed == 0) {  divly.scrollTop = 0;
        divly.focus();
        var contentHeight = divly.scrollHeight;
        var visibleHeight = divly.offsetHeight;
        
        // If the content is taller than the visible area, adjust the scrollTop to keep the text at the top
        if (contentHeight > visibleHeight) {
          divly.scrollTop = contentHeight - visibleHeight;
       } }
      });

        
         // save the text inside the div to localStorage when the content changes
         div1.addEventListener("input", function() {
          var whichDiv = currentList;
          if (whichDiv == 0) {}
          else {
            var thatDiv =  'docItem' + whichDiv;
            localStorage.setItem(thatDiv, div1.innerHTML);
            updateWordCount()
          }
         
        });




      
      // save the text inside the div to localStorage when the content changes
                   right0.addEventListener("input", function() {
                    var whichDiv = currentList;
                    if (whichDiv == 0) {
                      var thatNote =  'rNotes';
                      localStorage.setItem(thatNote, right0.innerHTML);
        
                    }
                    else {
                      var thatNote =  'docNotes' + whichDiv;
                      localStorage.setItem(thatNote, right0.innerHTML);
                    }
                   
                  });




                  const printo = document.querySelector('.dgo');

                  printo.addEventListener('click', function(e) {
                  
                        e.preventDefault();
  // Create popup elements
  const popup = document.createElement("div");
  const popupInner = document.createElement("div");
  const popupTitle = document.createElement("h2");
  const radio1 = document.createElement("label");
  const radio1Input = document.createElement("input");
  const radio3Text = document.createTextNode("Delete document after download");
  const radio2 = document.createElement("label");
  const radio2Input = document.createElement("input");
  const radio2Text = document.createTextNode("Clear text from document after download");
  const radio3 = document.createElement("label");
  const radio3Input = document.createElement("input");
  const radio1Text = document.createTextNode("Keep document as is");
  const downloadButton = document.createElement("button");
  const buttonText = document.createTextNode("Download");
  const cancelButton = document.createElement("button");
  const buttonText2 = document.createTextNode("Cancel");
  
  // Set attributes and text content
  popup.id = "popup";
  popupInner.id = "popup-inner";
  popupTitle.textContent = "Options:";
  radio1Input.type = "radio";
  radio1Input.name = "download-option";
  radio1Input.value = "keep";
  radio1Input.checked = true;
  radio1.appendChild(radio1Input);
  radio1.appendChild(radio1Text);
  radio2Input.type = "radio";
  radio2Input.name = "download-option";
  radio2Input.value = "clear";
  radio2.appendChild(radio2Input);
  radio2.appendChild(radio2Text);
  radio3Input.type = "radio";
  radio3Input.name = "download-option";
  radio3Input.value = "delete";
  radio3.appendChild(radio3Input);
  radio3.appendChild(radio3Text);
  downloadButton.appendChild(buttonText);
  downloadButton.onclick = closePopup;
  cancelButton.appendChild(buttonText2);
  cancelButton.onclick = closePopupC;
  
  // Append elements to popup
  popupInner.appendChild(popupTitle);
  popupInner.appendChild(radio1);
  popupInner.appendChild(radio2);
  popupInner.appendChild(radio3);
  popupInner.appendChild(cancelButton);
  popupInner.appendChild(downloadButton);
  popup.appendChild(popupInner);
  
  // Add popup to document
  document.body.appendChild(popup);
});



function closePopup() {
  
    const popup = document.getElementById("popup");
    const selectedOption = document.querySelector('input[name="download-option"]:checked').value;
    
    if (selectedOption === "clear") {
      popup.remove();
      download();
      setTimeout(function() {
       const myF = document.querySelector('.clear');
const myEvent = new Event("click");
myF.dispatchEvent(myEvent);
      }, 2000);

      
    } else if (selectedOption === "delete") {
      popup.remove();
      download();
      setTimeout(function() {
        const myF = document.querySelector('.delete');
const myEvent = new Event("click");
myF.dispatchEvent(myEvent);
      }, 2000);
 
    } else if (selectedOption === "keep") {
      popup.remove();
      download();
    }
    
    
  }


    
function download(){
  var cList = currentList;
   if (cList == 0) {
         alert("Select a document to download as a .txt file");
   } else {
    var divId = "div1";
    var kimo = currentList;
    var dimo = localStorage.getItem("docName" + kimo);
    var nimo = dimo;
    const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const dately = `${day}-${month}-${year}`;

    var text = document.getElementById(divId).innerText;
    var filename = nimo + "-" + dately + ".txt";
    var blob = new Blob([text], {type: "text/plain"});
    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
   } };




   
  function closePopupC() {
  
    const popup = document.getElementById("popup");

    
    popup.remove();
  }




  
  

  




  

  function runWordcount() {

   var min = startcount;
  
   var now = wordst;
   
   var rounder = now - min;
   
   
   if (rounder == atround + 1) {
    score = score + atround;
    document.getElementById('scorebox').innerHTML = score;
    var tally = atround;
    var atroundsum = atround + 125;
    if (playing == 1){
    Notice = tally + " words. Bonus " + tally + " points";
  } else {
    Notice = tally + " words. Well done!";
  }
  runNotice();
    atround = atroundsum;
    
   }



  }
  






      
       
div1.addEventListener('input', function() {

  if (intTime == 0){
        runTimer('1');
     

    
       }
       if (playing == 0){
        score = 0;
        clearTimeout(timerScore);
clearTimeout(timerLife);

        document.getElementById('tscorebox').innerHTML = 0;
        document.getElementById('scorebox').innerHTML = 0;
document.getElementById("scoreC").classList.add("hidden");
document.getElementById("scorebox").classList.add("hidden");
document.getElementById("tscoreC").classList.add("hidden");
document.getElementById("tscorebox").classList.add("hidden");

       }
       runWordcount();
          clearTimeout(timerId1);
          clearTimeout(timerId2);
 var timer1 = 1000;
 var timer2 = 2000;     
  
if (localStorage.getItem('mode') == 'easy'){
  timer1 = 2000;
  timer2 = 3000;
}
if (localStorage.getItem('mode') == 'medium'){
  timer1 = 1500;
  timer2 = 2000;
}
if (localStorage.getItem('mode') == 'hard'){
  timer1 = 800;
  timer2 = 1400;
}
if (localStorage.getItem('mode') == 'insane'){
  timer1 = 500;
  timer2 = 500;
}

          warningShown = false;
    timerId1 = setTimeout(function() {
        if (!warningShown) {
          
          if (playing == 1){ 
                    // Show warning
          warningShown = true;
          
          const containerW = document.querySelector('#containerW');
          containerW.style.backgroundColor = ' snow';
          // Flash warning color four times
            for (let i = 0; i < 4; i++) {
                setTimeout(function() {
                  containerW.style.backgroundColor = 'yellow';
                }, 62.5 * i);
                setTimeout(function() {
                  containerW.style.backgroundColor = 'snow';
                }, 62.5 * i + 31.25);
            }
        }
      
              timerId2 = setTimeout(function() {
                // Leave fullscreen mode and flash error color
                runTimer('0');
            
               
                // Flash error color four times
                if (playing == 1){
              
          hearts--;
let heartsSpan = document.getElementById("hearts");
heartsSpan.innerHTML = heartsSpan.innerHTML.slice(0, -1);
Notice = "Minus '1' Life";
runNotice();
if (hearts == 0) {
  stopG();
}
                for (let i = 0; i < 4; i++) {
                  setTimeout(function() {
                    containerW.style.backgroundColor = 'red';
                  }, 62.5 * i);
                  setTimeout(function() {
                    containerW.style.backgroundColor = '';
                  }, 62.5 * i + 31.25);
                }
            }
                setTimeout(function() {
                 containerW.style.backgroundColor = 'snow';
                }, 62.5 * 4);
              }, timer1);
            }
          }, timer2);
});

function runScore(){
timerScore = setInterval(function() {
 if (playing == 1){
  if (intTime == 1) {

    var scored = 15;
    var scop;
if (hearts == 1) {
  scop = 1.5;
} if (hearts == 2) {
  scop = 1.25;
} else {
  scop = 1;
}

   
    var scor = scop * scored;
    var scroed = scor + score;
    score = scroed;

    document.getElementById('scorebox').innerHTML = scroed;
  }
  }
}, 15000);


timerLife = setInterval(function() {
  if (playing == 1){
  if (intTime == 1) {
     hearts++;
  document.getElementById("hearts").innerHTML += "&#10084;";
  Notice = "Bonus Life";

  runNotice();
 }
}

}, 300000);




}



function runTimer(what) {
  if (what == 1){
    intTime = 1;
startTime = Date.now() - elapsedTime;
timerInterval = setInterval(function() {
let elapsedTimeMillis = Date.now() - startTime;
updateTimer(elapsedTimeMillis);

}, 10);
  }
  
  if (what == 0) { 
    intTime = 0;
    clearInterval(timerInterval);
elapsedTime = Date.now() - startTime;

  }
  if (what == 2){
    intTime = 0;
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimer(0);
    clearTimeout(timerId1);
    clearTimeout(timerId2);
  }

};




if(localStorage.getItem('allTimeElapsed') === null || localStorage.getItem('allTimeElapsed') == "" ) {
  localStorage.setItem("allTimeElapsed", 0);
  const ts = document.querySelector("#timeScore");
  ts.innerHTML = "00.00";
} else {
  let amounto = Number(localStorage.getItem("allTimeElapsed"));
  let timeScore = document.getElementById("timeScore");
  let hours = Math.floor(amounto / 3600000);
  let minutes = Math.floor((amounto % 3600000) / 60000);

  let hoursString = hours.toString().padStart(2, "0");
  let minutesString = minutes.toString().padStart(2, "0");
  timeScore.textContent = `${hoursString}:${minutesString}`;

  

}

// Add a method to the Date prototype to get the week number
Date.prototype.getWeek = function() {
  const date = new Date(this.valueOf());
  const dayMs = 86400000;
  const thursdayOffset = 3;
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + thursdayOffset - ((date.getDay() + 6) % 7));
  return Math.floor((date.getTime() + dayMs * 4) / dayMs) - Math.floor((new Date(date.getFullYear(), 0, 1)).getTime() / dayMs) + 1;
}

const today = new Date();
const currentWeekNumber = today.getWeek();

if(localStorage.getItem('wWeek') === null || localStorage.getItem('wWeek') == "" ) {
  localStorage.setItem("wWeek", currentWeekNumber);
  localStorage.setItem("Week", 0);
  const ts = document.querySelector("#WtimeScore");
  ts.innerHTML = "00.00";
} else if (currentWeekNumber !== Number(localStorage.getItem("wWeek"))) { 
  localStorage.setItem("wWeek", currentWeekNumber);
  localStorage.setItem("Week", 0);
  const ts = document.querySelector("#WtimeScore");
  ts.innerHTML = "00.00"; 
} else {
  let amounto = Number(localStorage.getItem("wWeek"));
  let timeScore = document.getElementById("WtimeScore");
  let hours = Math.floor(amounto / 3600000);
  let minutes = Math.floor((amounto % 3600000) / 60000);
  let hoursString = hours.toString().padStart(2, "0");
  let minutesString = minutes.toString().padStart(2, "0");
  timeScore.textContent = `${hoursString}:${minutesString}`;
}



function updateTimer(elapsedTimeMillis) {
  tElapsedTimeMillis =+ elapsedTimeMillis;
  let hours = Math.floor(elapsedTimeMillis / 3600000);
  let minutes = Math.floor((elapsedTimeMillis % 3600000) / 60000);
  let seconds = Math.floor((elapsedTimeMillis % 60000) / 1000);
  let millis = Math.floor(elapsedTimeMillis % 1000 / 10);
  
  let hoursString = hours.toString().padStart(2, "0");
  let minutesString = minutes.toString().padStart(2, "0");
  let secondsString = seconds.toString().padStart(2, "0");
  let millisString = millis.toString().padStart(2, "0");
  let timerDisplay = document.getElementById("timers");
  timerDisplay.textContent = `${hoursString}:${minutesString}:${secondsString}.${millisString}`;
  }



function updateTimeScore() {
  let allTimeElapsed = Number(localStorage.getItem("allTimeElapsed"));
  let wTimeElapsed = Number(localStorage.getItem("Week"));
  let newAllTimeElapsed = allTimeElapsed + tElapsedTimeMillis;
  let wAllTimeElapsed = wTimeElapsed + tElapsedTimeMillis;
  let hours = Math.floor(newAllTimeElapsed / 3600000);
  let minutes = Math.floor((newAllTimeElapsed % 3600000) / 60000);
  let whours = Math.floor(wAllTimeElapsed / 3600000);
  let wminutes = Math.floor((wAllTimeElapsed % 3600000) / 60000);

  let hoursString = hours.toString().padStart(2, "0");
  let minutesString = minutes.toString().padStart(2, "0");
  let whoursString = whours.toString().padStart(2, "0");
  let wminutesString = wminutes.toString().padStart(2, "0");

  let timeScore = document.getElementById("timeScore");
  timeScore.textContent = `${hoursString}:${minutesString}`;
  localStorage.setItem("allTimeElapsed", newAllTimeElapsed);
  let wtimeScore = document.getElementById("WtimeScore");
  wtimeScore.textContent = `${whoursString}:${wminutesString}`;
  localStorage.setItem("Week", wAllTimeElapsed);
  ElapsedTimeMillis = 0;
}















// Find the link element that has href="#help"
const linko = document.querySelector('.about');

// Add a click event listener to the link
linko.addEventListener('click', function(e) {
  // Prevent the default behavior of following the link
  e.preventDefault();

  // Get the offsetTop of the section with id="help"
  const section = document.getElementById('help');
  const offsetTop = section.offsetTop;

  // Scroll the page to the section's offsetTop
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});

// Find the link element that has href="#help"
const link = document.querySelector('.learn');

// Add a click event listener to the link
link.addEventListener('click', function(e) {
  // Prevent the default behavior of following the link
  e.preventDefault();

  // Get the offsetTop of the section with id="help"
  const section = document.getElementById('about');
  const offsetTop = section.offsetTop;

  // Scroll the page to the section's offsetTop
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});














function runNotice(){
document.getElementById("nameArea").classList.add("hidden");
document.getElementById("menuArea").classList.add("hidden");
    document.getElementById("flasher").classList.remove("hidden");
    document.getElementById('Notice').innerHTML = Notice;

  setTimeout(function() {
   document.getElementById("flasher").classList.add("hidden");
    document.getElementById("nameArea").classList.remove("hidden"); 
    document.getElementById("gameArea").classList.remove("hidden");
    if (playing == 0) {
      document.getElementById("menuArea").classList.remove("hidden");
    }
  }, 3000);
    
}


runStarter();
