var count1 = 0;
var count2 = 0;

function selectImage(){

  if(document.querySelector("button i").classList[1]=="fa-play" || document.querySelector("button i").classList[2]=="fa-play" )
    {
      document.querySelector("button i").classList.remove("fa-play");
      document.querySelector("button i").classList.add("fa-pause");
    }
  else
  {
    document.querySelector("button i").classList.remove("fa-pause");
    document.querySelector("button i").classList.add("fa-play");
  }
  //for player 1
  var randomNumber1 = Math.floor(Math.random() * 3) + 1;

  var randomImage = "game" + randomNumber1 + ".png";

  var imageSource = "Images/" + randomImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", imageSource);

  //for player 2
  var randomNumber2 = Math.floor(Math.random() * 3) + 1;

  var imageSource2 = "Images/game" + randomNumber2 + ".png"

  document.querySelectorAll("img")[1].setAttribute("src", imageSource2 );


  if(randomNumber1 == 1 && randomNumber2 == 2){
    document.querySelector("h2").innerHTML = "🏆 Player 1 wins!!!";
    count1++;
    document.querySelector("#player1").innerHTML = count1;
  }

  else if(randomNumber1 == 1 && randomNumber2 == 3){
    document.querySelector("h2").innerHTML = "🏆 Player 2 wins!!!";
    count2++;
    document.querySelector("#player2").innerHTML = count2;
  }

  else if(randomNumber1 == 2 && randomNumber2 == 1){
    document.querySelector("h2").innerHTML = "🏆 Player 2 wins!!!";
    count2++;
    document.querySelector("#player2").innerHTML = count2;
  }

  else if(randomNumber1 == 2 && randomNumber2 == 3){
    document.querySelector("h2").innerHTML = "🏆 Player 1 wins!!!";
    count1++;
    document.querySelector("#player1").innerHTML = count1;
  }

  else if(randomNumber1 == 3 && randomNumber2 == 1){
    document.querySelector("h2").innerHTML = "🏆 Player 1 wins!!!";
    count1++;
    document.querySelector("#player1").innerHTML = count1;
  }

  else if(randomNumber1 == 3 && randomNumber2 == 2){
    document.querySelector("h2").innerHTML = "🏆 Player 2 wins!!!";
    count2++;
    document.querySelector("#player2").innerHTML = count2;
  }

  else
    document.querySelector("h2").innerHTML = "Tie!!!";

    winnerOfGame();
}

function winnerOfGame()
{
  if(count1 > count2)
    document.querySelector("#win").innerHTML = "Player 1 Winning";
  else if(count1 < count2)
    document.querySelector("#win").innerHTML = "Player 2 Winning";
  else
    document.querySelector("#win").innerHTML = "Tie";
}
