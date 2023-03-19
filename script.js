let countdown = document.createElement("div");
countdown.style.textAlign = "center"
document.body.append(countdown);
function one(callback){
    countdown.textContent="10"
    setTimeout(callback,1000)
}

function two(callback){
    countdown.textContent="9"
    setTimeout(callback,1000)
}

function three(callback){
    countdown.textContent="8"
    setTimeout(callback,1000)
}

function four(callback){
    countdown.textContent="7"
    setTimeout(callback,1000)
}

function five(callback){
    countdown.textContent="6"
    setTimeout(callback,1000)
}

function six(callback){
    countdown.textContent="5"
    setTimeout(callback,1000)
}

function seven(callback){
    countdown.textContent="4"
    setTimeout(callback,1000)
}

function eight(callback){
    countdown.textContent="3"
    setTimeout(callback,1000)
}

function nine(callback){
    countdown.textContent="2"
    setTimeout(callback,1000)
}

function ten(callback){
    countdown.textContent="1"
    setTimeout(callback,1000)
}

function message(){
    countdown.textContent="Happy Independence Day"
    message();
}


function timer(){
    one(()=>{
        two(()=>{
           three(()=>{
                four(()=>{
                  five(()=>{
                    six(()=>{
                        seven(()=>{
                            eight(()=>{
                                nine(()=>{
                                    ten(()=>{
                                        message()
                                    })
                                })
                            })
                        })
                    });
                  });
                })
            })

   });

    });
    
}
timer();