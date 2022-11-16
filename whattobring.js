// ITEM 1 - HIKING BOOTS

const btnOneYes = document.getElementById('btnOneYes');

btnOneYes.addEventListener('click', function onClick(event) {
  const kitTitleOne = document.getElementById('kitTitleOne');

  kitTitleOne.style.color = '#57aca5';
  kitTitleOne.style.textDecoration = 'line-through';
  alert ("Great! Make sure they're comfortable!")

});

const btnOneNo = document.getElementById('btnOneNo');

btnOneNo.addEventListener('click', function onClick(event) {
  const kitTitleOne = document.getElementById('kitTitleOne');

  kitTitleOne.style.color = 'black';
  kitTitleOne.style.textDecoration = 'none';
  alert("Okay, don't forget your waterproof shoes for the waterfalls!"); 
  
});


// ITEM 2 - DRINKING WATER

const btnTwoYes = document.getElementById('btnTwoYes');

btnTwoYes.addEventListener('click', function onClick(event) {
  const kitTitleTwo = document.getElementById('kitTitleTwo');

  kitTitleTwo.style.color = '#57aca5';
  kitTitleTwo.style.textDecoration = 'line-through';
  alert ("Great! You'll need at least 1-2 liters!")

});

const btnTwoNo = document.getElementById('btnTwoNo');

btnTwoNo.addEventListener('click', function onClick(event) {
  const kitTitleTwo = document.getElementById('kitTitleTwo');

  kitTitleTwo.style.color = 'black';
  kitTitleTwo.style.textDecoration = 'none';
  alert("Uh oh! Don't forget water!"); 
  
});


// ITEM 3 - CAMERA

const btnThreeYes = document.getElementById('btnThreeYes');

btnThreeYes.addEventListener('click', function onClick(event) {
  const kitTitleThree = document.getElementById('kitTitleThree');

  kitTitleThree.style.color = '#57aca5';
  kitTitleThree.style.textDecoration = 'line-through';
  alert ("Woo hoo! We can't wait to see your photos")

});

const btnThreeNo = document.getElementById('btnThreeNo');

btnThreeNo.addEventListener('click', function onClick(event) {
  const kitTitleThree = document.getElementById('kitTitleThree');

  kitTitleThree.style.color = 'black';
  kitTitleThree.style.textDecoration = 'none';
  alert("Are you sure you don't want to make any memories?"); 
  
});


// ITEM 4 - LUNCH

const btnFourYes = document.getElementById('btnFourYes');

btnFourYes.addEventListener('click', function onClick(event) {
  const kitTitleFour = document.getElementById('kitTitleFour');

  kitTitleFour.style.color = '#57aca5';
  kitTitleFour.style.textDecoration = 'line-through';
  alert ("Can we have a crisp?")

});

const btnFourNo = document.getElementById('btnFourNo');

btnFourNo.addEventListener('click', function onClick(event) {
  const kitTitleFour = document.getElementById('kitTitleFour');

  kitTitleFour.style.color = 'black';
  kitTitleFour.style.textDecoration = 'none';
  alert("Okay - but we won't share ours :)"); 
  
});


// ITEM 5 - SUN SCREEN

const btnFiveYes = document.getElementById('btnFiveYes');

btnFiveYes.addEventListener('click', function onClick(event) {
  const kitTitleFive = document.getElementById('kitTitleFive');

  kitTitleFive.style.color = '#57aca5';
  kitTitleFive.style.textDecoration = 'line-through';
  alert ("Excellent. No one wants to burn!")

});

const btnFiveNo = document.getElementById('btnFiveNo');

btnFiveNo.addEventListener('click', function onClick(event) {
  const kitTitleFive = document.getElementById('kitTitleFive');

  kitTitleFive.style.color = 'black';
  kitTitleFive.style.textDecoration = 'none';
  alert("Are you sure?"); 
  
});

// ITEM 6 - FLASH LIGHT


const btnSixYes = document.getElementById('btnSixYes');

btnSixYes.addEventListener('click', function onClick(event) {
  const kitTitleSix = document.getElementById('kitTitleSix');
    
  
  kitTitleSix.style.color = '#57aca5';
  kitTitleSix.style.textDecoration = 'line-through';
  alert ("Let's rave in the tunnels!")

});

const btnSixNo = document.getElementById('btnSixNo');

btnSixNo.addEventListener('click', function onClick(event) {
  const kitTitleSix = document.getElementById('kitTitleSix');

  kitTitleSix.style.color = 'black';
  kitTitleSix.style.textDecoration = 'none';
  alert("Are you sure? You might bump your head"); 
  
});

// ITEM 6 - PICTURE CHANGE

