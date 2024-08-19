function increaseScoreHome(scoreHome) {
    let homeScore = document.getElementById("scoreHome").innerHTML;
    homeScore = ++homeScore;
    console.log(homeScore);
    document.getElementById("scoreHome").innerText = homeScore;
  }
  
  function increaseScoreAway(scoreAway) {
    let awayScore = document.getElementById("scoreAway").innerHTML;
    awayScore = ++awayScore;
    console.log(awayScore);
    document.getElementById("scoreAway").innerText = awayScore;
  }
  
  function decreaseScoreHome(scoreHome) {
    let homeScore = document.getElementById("scoreHome").innerHTML;
    if (homeScore > 0) {
      homeScore = --homeScore;
      document.getElementById("scoreHome").innerText = homeScore;
    }
    if ((homeScore = 0)) {
      alert("The score cannot fall below zero !");
      document.getElementById("scoreHome").innerText = homeScore;
    }
  }
  
  function decreaseScoreAway(scoreAway) {
    let awayScore = document.getElementById("scoreAway").innerHTML;
    if (awayScore > 0) {
      awayScore = --awayScore;
      document.getElementById("scoreAway").innerText = awayScore;
    }
    if ((awayScore = 0)) {
      alert("The score can't fall any further!");
      document.getElementById("scoreAway").innerText = awayScore;
    }
  }
  
  function resetingHome(scoreHome) {
    let homeScoreReset = document.getElementById("scoreHome").innerHTML;
    homeScoreReset = 0;
    console.log(homeScoreReset);
    document.getElementById("scoreHome").innerText = homeScoreReset;
  }
  
  function resetingAway(scoreAway) {
    let awayScoreReset = document.getElementById("scoreAway").innerHTML;
    awayScoreReset = 0;
    console.log(awayScoreReset);
    document.getElementById("scoreAway").innerText = awayScoreReset;
  }
  
  function changeHomeName(teamHome) {
    let newHomeName = document.getElementById("teamHome").innerHTML;
    newHomeName = prompt("Please enter a new player name");
    document.getElementById("teamHome").innerHTML = newHomeName;
  }
  
  function changeAwayName(teamAway) {
    let newAwayName = document.getElementById("teamAway").innerHTML;
    newAwayName = prompt("Please enter a new player name");
    document.getElementById("teamAway").innerHTML = newAwayName;
  }
  
  function changeHomeScore(scoreHome) {
    let newHomeScore = document.getElementById("scoreHome").innerHTML;
    newHomeScore = prompt("Enter score");
    if ((newHomeScore = Number(newHomeScore))) {
      if (newHomeScore >= 0) {
        document.getElementById("scoreHome").innerHTML = newHomeScore;
      } else {
        alert("You can enter a value greater than zero");
      }
    } else {
      alert("You can only enter numbers");
    }
  }
  
  function changeAwayScore(scoreAway) {
    let newAwayScore = document.getElementById("scoreAway").innerHTML;
    newAwayScore = prompt("Enter the new score");
    if ((newAwayScore = Number(newAwayScore))) {
      if (newAwayScore >= 0) {
        document.getElementById("scoreAway").innerHTML = newAwayScore;
      } else {
        alert("You can enter a value greater than zero");
      }
    } else {
      alert("You can only enter numbers");
    }
  }