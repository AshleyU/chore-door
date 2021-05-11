const doorImage1 = document.getElementById('door1');
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const doorImage2 = document.getElementById('door2');
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const doorImage3 = document.getElementById('door3');
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById('start');

const isClicked = (door) => {
 if( door.src === closedDoorPath ) {
   return false;
 } else {
   return true;
 }
}

const playDoor = () => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
    playDoor();
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
    openDoor1 = beachDoorPath;
    playDoor();
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    playDoor();
  }
}

doorImage1.onclick = () => {
  if(!isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
  }
}

doorImage2.onclick = () => {
  if(!isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
  }
}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
  }
}

const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
}

randomChoreDoorGenerator();