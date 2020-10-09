window.onload = dailyTao;


var chapters = new Array(
  "I REASON'S REALIZATION: <br>1. The Reason that can be reasoned is not the eternal Reason. The name that can be named is not the eternal Name. The Unnamable is of heaven and earth the beginning. The Namable becomes of the ten thousand things the mother.<br>Therefore it is said: <br>2. 'He who desireless is found <br>The spiritual of the world will sound. <br>But he who by desire is bound <br>Sees the mere shell of things around.' <br>3. These two things are the same in source but different in name. Their sameness is called a mystery. Indeed, it is the mystery of mysteries. Of all spirituality it is the door.", 
  
  "II SELF-CULTURE:<br>1. Everywhere it is obvious that if beauty makes a display of beauty, it is sheer ugliness. It is obvious that if goodness makes a display of goodness, it is sheer badness. For <br>2. 'To be and not to be are mutually conditioned. The difficult, the easy, are mutually definitioned. The long, the short, are mutually exhibitioned. Above, below, are mutually cognitioned. The sound, the voice, are mutually coalitioned. Before and after are mutually positioned.' <br>3. Therefore <br>The holy man abides by non-assertion in his affairs and conveys by silence his instruction. When the ten thousand things arise, verily, he refuses them not. He quickens but owns not. He acts but claims not. Merit he accomplishes, but he does not dwell on it. <br>'Since he does not dwell on it it will never leave him.'"
)

function dailyTao() {
  var randomNum = Math.floor(Math.random() * chapters.length);
  document.getElementById("taoText").innerHTML = chapters[randomNum];
}

