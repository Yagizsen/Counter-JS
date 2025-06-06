const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const numCounter = document.getElementById("numCounter");
let count=0;

increaseBtn.onclick =function(){
    count++;
    numCounter.textContent= count
    
}
decreaseBtn.onclick =function(){
    count--;
    numCounter.textContent= count
    
}

resetBtn.onclick =function(){
    count=0;
    numCounter.textContent= count
    
}

