<script>
  let secondList = [15, 45]
  let seconds = secondList[0];
  let prepare = true;
  let start = false;
  

  function startCounter(){
    if(start){
      seconds -=1
    }
    if(seconds === 0 && prepare){
      seconds = secondList[1];
      prepare = false;
    }
    if(seconds === 0 && !prepare){
      seconds = secondList[0];
      prepare = true;
      start = false;
    }    
  }
  setInterval(startCounter, 1000)

</script>
<div class="ctn">
  <p class="text-lg my-2">You have 15 seconds to prepare your arguments after that you will have to answer the question for 45 seconds like in the official tests.</p>
  <br/>
  <p class="text-lg my-2">{prepare? "Time to prepare": "Time left to talk"}: <strong>{seconds} seconds</strong></p>
  <progress class="w-full my-2" value={seconds} max={prepare? 15: 45}/>
  <div class="flex flex-row">
    <button class="btn w-full my-2 mx-1" on:click={()=>{start=!start}}>{start? "Stop": "Start"}</button>
    <button class="btn w-full my-2 mx-1" on:click={()=>{
      start=false;
      prepare=true;
      seconds=secondList[0];
      }}>Reset</button>
  </div>
</div>

<style>
  /* IE and EDGE */
  progress {
      /* RESETS */
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      border-radius: 5px;
      background-color: rgb(241, 241, 241);
      color: rgb(92, 142, 252);
  }

  /* WEBKIT BROWSERS - CHROME, OPERA AND SAFARI */
  progress::-webkit-progress-bar {
      background-color: rgb(241, 241, 241);
      border-radius: 5px;
}

  progress::-webkit-progress-value {
      background-color: rgb(92, 142, 252);
      border-radius: 5px;
  }

  /* MOZILLA FIREFOX */
  progress::-moz-progress-bar {
      background-color: rgb(92, 142, 252);
      border-radius: 5px;
  }
</style>