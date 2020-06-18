
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  async function clock()
  {   
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      let str = "00:00:00";
      let tag;
      let start = document.getElementById("start");
      start.classList.add("hide");
      let stop = document.getElementById("stop");
      stop.classList.remove("hide");
      while(true)
      {
        tag = document.getElementById("re");
        tag.innerHTML = str;
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24)
        hours = 0;
        
        str = ((hours < 10) ? "0" + hours : hours) + ":"
        + ((minutes < 10) ? "0" + minutes : minutes) + ":"
        + ((seconds < 10) ? "0" + seconds : seconds);
        await sleep(1000);
        
        stop.addEventListener("click", return);
    }
}

function reset()
{
    let str = "00:00:00";
    let tag = document.getElementById("re");
    tag.innerText = str;
}


let start = document.getElementById("start")
start.addEventListener("click", clock);

