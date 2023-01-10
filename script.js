function bubbly(){
    clutter=""
    for (let i = 0; i < 120; i++) {
        clutter+=`<div class="circle">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector(".btm").innerHTML=clutter 
    }
    
    
    function timer(time){
       setInterval(() => {
       if(time>0){
        time--
        document.querySelector("#timer").textContent=time
       }
       else{
           document.querySelector(".btm").innerHTML=`<h1>Game Over</h1> <h1>Your Score: ${score}</h1>`
       }
       }, 1000);
    }
    
    score=0
    function scoreboard(newscore){
        score=newscore
        document.querySelector("#scoreb").textContent=score
    
    }
    
    function hitter() {
        hitted=Math.floor(Math.random()*10)
        document.querySelector("#hitt").textContent=hitted
    }
    
    
    document.querySelector(".btm").addEventListener("click",function(dets){
       if(Number(dets.target.textContent)===hitted){
           document.querySelector("#scoreb").textContent=hitted
          scoreboard(score+=hitted)
           hitter()
           bubbly()
       }
    })
    timer(30)
    hitter()
    scoreboard(score)
    bubbly()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function bubbly(){
    // clutter=""
    // for (let i = 0; i < 126; i++) {
    //     clutter+=`<div class="circle">${Math.floor(Math.random()*10)}</div>`
    // }
    // document.querySelector(".btm").innerHTML=clutter 
    // }
    // score=0
    // function scoreboard(newscore){
    //     score=newscore
    //     document.querySelector("#scoreb").textContent=score
    // }
    
    // function timer(time){
    //    setInterval(() => {
    //        if(time>0){
    //            time--
    //            document.querySelector("#timer").textContent=time
    //        }
    //        else{
    //            document.querySelector(".btm").innerHTML=`<h1>Game Over</h1> <br> <h2>Your Score :${score}</h2>`
    //        }
    //    }, 1000);
    // }
    // function hitter(){
    //     hitted=Math.floor(Math.random()*10)
    //     document.querySelector("#hitt").textContent=hitted
    // }
    
    // document.querySelector(".btm").addEventListener("click",function(dets){
    //     if(Number(dets.target.textContent)===hitted){
    //         document.querySelector("#scoreb").textContent=hitted
    //         scoreboard(score+=10)
    //         hitter()
            
    //     }
    // })
    
    
    // scoreboard(score)
    
    // hitter()
    // timer(60)
    // bubbly()