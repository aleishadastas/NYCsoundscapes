// Homepage Locations Audio Previews (Descending Order)
//Bronx Variables
// Circle one
let previewOne = document.getElementById("circleOne");
let audioOne = document.getElementById("audioOne");
// Circle two
let previewTwo = document.getElementById("circleTwo");
let audioTwo = document.getElementById("audioTwo");
// Circle three
let previewThree = document.getElementById("circleThree");
let audioThree = document.getElementById("audioThree");
// Circle four
let previewFour = document.getElementById("circleFour");
let audioFour = document.getElementById("audioFour");
// Circle five
let previewFive = document.getElementById("circleFive");
let audioFive = document.getElementById("audioFive");
// Manhattan Variables
// Circle six
let previewSix = document.getElementById("circleSix");
let audioSix = document.getElementById("audioSix");
// Circle seven
let previewSeven = document.getElementById("circleSeven");
let audioSeven = document.getElementById("audioSeven");
// Circle eight
let previewEight = document.getElementById("circleEight");
let audioEight = document.getElementById("audioEight");
// Circle nine
let previewNine = document.getElementById("circleNine");
let audioNine = document.getElementById("audioNine");
// Circle ten
let previewTen = document.getElementById("circleTen");
let audioTen = document.getElementById("audioTen");
// Circle eleven
let previewEleven = document.getElementById("circleEleven");
let audioEleven = document.getElementById("audioEleven");
// Staten Island Variables
// Circle twelve
let previewTwelve = document.getElementById("circleTwelve");
let audioTwelve = document.getElementById("audioTwelve");
// Circle thirteen
let previewThirteen = document.getElementById("circleThirteen");
let audioThirteen = document.getElementById("audioThirteen");
// Circle fourteen
let previewFourteen = document.getElementById("circleFourteen");
let audioFourteen = document.getElementById("audioFourteen");
// Queens Variables
// Circle fifteen
let previewFifteen = document.getElementById("circleFifteen");
let audioFifteen = document.getElementById("audioFifteen");
// Circle sixteen
let previewSixteen = document.getElementById("circleSixteen");
let audioSixteen = document.getElementById("audioSixteen");
// Circle seventeen
let previewSeventeen = document.getElementById("circleSeventeen");
let audioSeventeen = document.getElementById("audioSeventeen");
// Circle eighteen
let previewEighteen = document.getElementById("circleEighteen");
let audioEighteen = document.getElementById("audioEighteen");
// Circle nineteen
let previewNineteen = document.getElementById("circleNineteen");
let audioNineteen = document.getElementById("audioNineteen");
// Brooklyn Variables
// Circle twenty
let previewTwenty = document.getElementById("circleTwenty");
let audioTwenty = document.getElementById("audioTwenty");
// Circle twenty-one
let previewTwentyOne = document.getElementById("circleTwentyOne");
let audioTwentyOne = document.getElementById("audioTwentyOne");
// Circle twenty-two
let previewTwentyTwo = document.getElementById("circleTwentyTwo");
let audioTwentyTwo = document.getElementById("audioTwentyTwo");
// Circle twenty-three
let previewTwentyThree = document.getElementById("circleTwentyThree");
let audioTwentyThree= document.getElementById("audioTwentyThree");
// Circle twenty-four
let previewTwentyFour = document.getElementById("circleTwentyFour");
let audioTwentyFour = document.getElementById("audioTwentyFour");
// Circle twenty-five
let previewTwentyFive = document.getElementById("circleTwentyFive");
let audioTwentyFive = document.getElementById("audioTwentyFive");




//Event Listeners
// Bronx Audio Previews
// Circle one
previewOne.addEventListener('mouseenter', () => {
  audioOne.play();
  audioOne.currentTime = 0; // Reset the audio to 0 every time mouse enters
});

previewOne.addEventListener('mouseleave', () => {
  audioOne.pause();
});

// Circle two
previewTwo.addEventListener('mouseenter', () => {
    audioTwo.play();
    audioTwo.currentTime = 0; // Reset the audio to 0 every time mouse enters
  });
  
  previewTwo.addEventListener('mouseleave', () => {
    audioTwo.pause();
  });

  // Ccircle three
  previewThree.addEventListener('mouseenter', () => {
    audioThree.play();
    audioThree.currentTime = 0; // Resets the audio to 0 every time mouse enters
  });
  
  previewThree.addEventListener('mouseleave', () => {
    audioThree.pause();
  });

   // Circle four
   previewFour.addEventListener('mouseenter', () => {
    audioFour.play();
    audioFour.currentTime = 0; // Resets the audio to 0 every time mouse enters
  });
  
  previewFour.addEventListener('mouseleave', () => {
    audioFour.pause();
  });

   // Circle five
   previewFive.addEventListener('mouseenter', () => {
    audioFive.play();
    audioFive.currentTime = 0; // Resets the audio to 0 every time mouse enters
  });
  
  previewFive.addEventListener('mouseleave', () => {
    audioFive.pause();
  });

// Manhattan Audio Previews
 // Circle six
 previewSix.addEventListener('mouseenter', () => {
  audioSix.play();
  audioSix.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewSix.addEventListener('mouseleave', () => {
  audioSix.pause();
});

 // Circle seven
 previewSeven.addEventListener('mouseenter', () => {
  audioSeven.play();
  audioSeven.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewSeven.addEventListener('mouseleave', () => {
  audioSeven.pause();
});

// Circle eight
previewEight.addEventListener('mouseenter', () => {
  audioEight.play();
  audioEight.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewEight.addEventListener('mouseleave', () => {
  audioEight.pause();
});

// Circle nine
previewNine.addEventListener('mouseenter', () => {
  audioNine.play();
  audioNine.currentTime = 0; // Resets the audio to 0 every time mouse enters
  audioNine.volume = 0.5; // Lowered Volume
});

previewNine.addEventListener('mouseleave', () => {
  audioNine.pause();
});

// Circle ten
previewTen.addEventListener('mouseenter', () => {
  audioTen.play();
  audioTen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTen.addEventListener('mouseleave', () => {
  audioTen.pause();
});

// Circle eleven
previewEleven.addEventListener('mouseenter', () => {
  audioEleven.play();
  audioEleven.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewEleven.addEventListener('mouseleave', () => {
  audioEleven.pause();
});

// Staten Island Audio Previews
// Circle twelve
previewTwelve.addEventListener('mouseenter', () => {
  audioTwelve.play();
  audioTwelve.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTwelve.addEventListener('mouseleave', () => {
  audioTwelve.pause();
});

// Circle thirteen
previewThirteen.addEventListener('mouseenter', () => {
  audioThirteen.play();
  audioThirteen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewThirteen.addEventListener('mouseleave', () => {
  audioThirteen.pause();
});

// Circle fourteen
previewFourteen.addEventListener('mouseenter', () => {
  audioFourteen.play();
  audioFourteen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewFourteen.addEventListener('mouseleave', () => {
  audioFourteen.pause();
});

// Queens Audio Previews
// Circle fifteen
previewFifteen.addEventListener('mouseenter', () => {
  audioFifteen.play();
  audioFifteen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewFifteen.addEventListener('mouseleave', () => {
  audioFifteen.pause();
});
// Circle sixteen
previewSixteen.addEventListener('mouseenter', () => {
  audioSixteen.play();
  audioSixteen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewSixteen.addEventListener('mouseleave', () => {
  audioSixteen.pause();
});
// Circle seventeen
previewSeventeen.addEventListener('mouseenter', () => {
  audioSeventeen.play();
  audioSeventeen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewSeventeen.addEventListener('mouseleave', () => {
  audioSeventeen.pause();
});
// Circle eighteen
previewEighteen.addEventListener('mouseenter', () => {
  audioEighteen.play();
  audioEighteen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewEighteen.addEventListener('mouseleave', () => {
  audioEighteen.pause();
});
// // Circle nineteen
previewNineteen.addEventListener('mouseenter', () => {
  audioNineteen.play();
  audioNineteen.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewNineteen.addEventListener('mouseleave', () => {
  audioNineteen.pause();
});

// Brooklyn Audio Previews
// // Circle twenty
previewTwenty.addEventListener('mouseenter', () => {
  audioTwenty.play();
  audioTwenty.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTwenty.addEventListener('mouseleave', () => {
  audioTwenty.pause();
});
// // Circle twenty-one
previewTwentyOne.addEventListener('mouseenter', () => {
  audioTwentyOne.play();
  audioTwentyOne.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTwentyOne.addEventListener('mouseleave', () => {
  audioTwentyOne.pause();
});
// // Circle twenty-two
previewTwentyTwo.addEventListener('mouseenter', () => {
  audioTwentyTwo.play();
  audioTwentyTwo.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTwentyTwo.addEventListener('mouseleave', () => {
  audioTwentyTwo.pause();
});
// // Circle twenty-three
previewTwentyThree.addEventListener('mouseenter', () => {
  audioTwentyThree.play();
  audioTwentyThree.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTwentyThree.addEventListener('mouseleave', () => {
  audioTwentyThree.pause();
});
// // Circle twenty-four
previewTwentyFour.addEventListener('mouseenter', () => {
  audioTwentyFour.play();
  audioTwentyFour.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTwentyFour.addEventListener('mouseleave', () => {
  audioTwentyFour.pause();
});
// // Circle twenty-four
previewTwentyFive.addEventListener('mouseenter', () => {
  audioTwentyFive.play();
  audioTwentyFive.currentTime = 0; // Resets the audio to 0 every time mouse enters
});

previewTwentyFive.addEventListener('mouseleave', () => {
  audioTwentyFive.pause();
});