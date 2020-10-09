window.onload = dailyTao;


var chapters = new Array(
  "1 REASON'S REALIZATION: <br>1. The Reason that can be reasoned is not the eternal Reason. The name that can be named is not the eternal Name. The Unnamable is of heaven and earth the beginning. The Namable becomes of the ten thousand things the mother.<br>Therefore it is said: <br>2. 'He who desireless is found <br>The spiritual of the world will sound. <br>But he who by desire is bound <br>Sees the mere shell of things around.' <br>3. These two things are the same in source but different in name. Their sameness is called a mystery. Indeed, it is the mystery of mysteries. Of all spirituality it is the door.", 
  
  "2 SELF-CULTURE:<br>1. Everywhere it is obvious that if beauty makes a display of beauty, it is sheer ugliness. It is obvious that if goodness makes a display of goodness, it is sheer badness. For <br>2. 'To be and not to be are mutually conditioned. The difficult, the easy, are mutually definitioned. The long, the short, are mutually exhibitioned. Above, below, are mutually cognitioned. The sound, the voice, are mutually coalitioned. Before and after are mutually positioned.' <br>3. Therefore <br>The holy man abides by non-assertion in his affairs and conveys by silence his instruction. When the ten thousand things arise, verily, he refuses them not. He quickens but owns not. He acts but claims not. Merit he accomplishes, but he does not dwell on it. <br>'Since he does not dwell on it, it will never leave him.'",
  
  "3 KEEPING THE PEOPLE QUIET:<br>Not exalting worth keeps people from rivalry. Not prizing what is difficult to obtain keeps people from committing theft. Not contemplating what kindles desire keeps the heart unconfused. Therefore the holy man when he governs empties the peoples hearts but fills their souls. He weakens their ambitions but strengthens their backbones. Always he keeps the people unsophisticated and without desire. He causes that the crafty do not dare to act. When he acts with non-assertion there is nothing ungoverned.",
  
  "4 SOURCELESS:<br>Reason is empty, but its use is inexhaustible. In its profundity, verily, it resembleth the father of the ten thousand things.<br>'It will blunt its own sharpness,<br>Will its tangles adjust;<br>It will dim its own radiance<br>And be one with its dust.'<br>Oh, how calm it seems to remain! I know not whose son it is. Before the Lord, Reason takes precedence.",
  
  "5 THE FUNCTION OF EMPTINESS:<br>  Heaven and earth exhibit no benevolence; to them the ten thousand things are like straw dogs. The holy man exhibits no benevolence; to him the hundred families are like straw dogs.<br>  Is not the space between heaven and earth like unto a bellows? It is empty; yet it collapses not. It moves, and more and more comes forth. [But]<br>'How soon exhausted is<br>A gossip's fulsome talk!<br>And should we not prefer<br>On the middle path to walk?'",
  
  "6 THE COMPLETION OF FORM:<br>'The valley spirit not expires,<br>Mysterious mother 'tis called by the sires<br>The mysterious mother's door, to boot,<br>Is called of Heaven and earth the root.<br>Forever and aye it seems to endure<br>And its use is without effort sure.'",
  
  "7 DIMMING RADIANCE:<br>  Heaven endures and earth is lasting. And why can heaven and earth endure and be lasting? Because they do not live for themselves. On that account can they endure.<br>  Therefore the holy man puts his person behind and his person comes to the front. He surrenders his person and his person is preserved. Is it not because he seeks not his own? For that reason he can accomplish his own.",
  
  "8 EASY BY NATURE:<br>  Superior goodness resembleth water. Water in goodness benefiteth the ten thousand things, yet it quarreleth not. Because it dwells in places whice the multitude of men shun, therefore it is near unto the eternal Reason. <br>  For a dwelling goodness chooses the level. For a heart goodness chooses commotion. When giving, goodness chooses benevolence. In words, goodness chooses faith. In government goodness chooses order. In business goodness chooses ability. In its motion goodness chooses timeliness. It quarreleth not. Therefore, it is not rebuked.",
  
  "9 PRACTISING PLACIDITY:<br>  Holding and keeping full, had that not better be left alone? Handling and keeping sharp, can that wear long? If gold and jewels fill the hall no one can protect it.<br>  Rich and high but proud, brings about its own misfortune. To accomplish merit and acquire fame, then to withdraw oneself, that is Heaven's Way.",
  
  "10 WHAT CAN BE DONE:<br>  He who sustains and disciplines his soul and ebraces unity cannot be deranged. Through attention to his vitality and inducing tenderness he can become like a little child. By puriying, by cleansing and profound intuition he can be free from faults.<br>  In loving the people and administering the country he can practise non-assertion. Opening and closing the gates of heaven he can be like a mother-bird: bright, and white, and penetrating the four quarters, he can be unsophisticated. He quickens them and feeds them. He quickens but owns not. He acts but claims not. He excels but rules not. This is called profound virtue."

)

function dailyTao() {
  var randomNum = Math.floor(Math.random() * chapters.length);
  document.getElementById("taoText").innerHTML = chapters[randomNum];
}

