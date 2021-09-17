let wavefinder_wheres = document.querySelectorAll('a');
for(let i = wavefinder_wheres.length - 1; i >= 0; i--){
    if(wavefinder_wheres[i].getAttribute('href') && wavefinder_wheres[i].getAttribute('href').includes("/breaks/")){
        wavefinder_wheres[i].addEventListener('mouseover', function() {
            // console.log('hi');
        })     
    }
}