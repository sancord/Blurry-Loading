const load = document.querySelector(".loading") 
    const bg = document.querySelector(".background")

    let counter = 0;

    let int = setInterval(blurring, 30)

    function blurring() {
      counter++

      if (counter > 99){
        clearInterval(int)
      }

      load.innerText = `${counter}%`
      load.style.opacity = scale(counter, 0, 100, 1, 0)
      bg.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`

    }

    function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
  
