const wavefinder_wheres = document.getElementsByClassName("wavefinder-where");

for(let spot = 0; spot < wavefinder_wheres.length; spot++){
    alert(wavefinder_wheres[spot].getElementsByTagName('a')[0].text)
}