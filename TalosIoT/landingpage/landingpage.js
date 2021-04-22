



function showstuff(id){
    var Fri = id +'Fri'
    var Mon = id +'Mon'
    const i = document.getElementById(Fri)
    const i2 = document.getElementById(Mon)
    var displayi = i.style.display;
    var displayi2 = i2.style.display;
    if(displayi == 'block' && displayi2 =='none'){
        i.style.display= 'none'
        i2.style.display='block'
    }else{
        i.style.display='block'
        i2.style.display='none'
    }

}