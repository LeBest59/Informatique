var input = document.getElementById('recherche_input')
var btn = document.getElementById('recherche_btn')

btn.addEventListener('click', recherche)


function recherche(){
    
    window.location.href = "HP.html?recherche=" + input.value
}

