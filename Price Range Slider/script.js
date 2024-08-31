document.addEventListener('DOMContentLoaded',function(){
    const minInput=document.getElementById('min');
    const maxInput=document.getElementById('max');
    const sliderMin=document.getElementById('minInput');
    const sliderMax=document.getElementById('maxInput');

    minInput.addEventListener('input',function(){
        sliderMin.value=minInput.value;
        if(parseInt(minInput.value)>parseInt(maxInput.value)){
            minInput.value=maxInput.value;
            sliderMin.value=minInput.value;
        }
    })

    maxInput.addEventListener('input',function(){
        sliderMax.value=maxInput.value;
        if(parseInt(maxInput.value)<parseInt(minInput.value)){
            maxInput.value=minInput.value;
            sliderMax.value=maxInput.value;
        }
    })

    sliderMin.addEventListener('input',function(){
        minInput.value=sliderMin.value;
        if(parseInt(minInput.value)>parseInt(maxInput.value)){
            minInput.value=maxInput.value;
            sliderMin.value=minInput.value;
        }
    })

   sliderMax.addEventListener('input',function(){
    maxInput.value=sliderMax.value;
    if(parseInt(maxInput.value)<parseInt(minInput.value)){
        maxInput.value=minInput.value;
        sliderMax.value=maxInput.value;
    }
   })
})