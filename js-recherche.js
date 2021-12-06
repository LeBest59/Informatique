var result = document.querySelectorAll("[data-recherche]")

var str = window.location.href

var url = new URL(str);

var recherche = url.searchParams.get("recherche");

for(i = 0; i < result.length; i++){

    console.log(result[i].dataset.recherche)

    console.log(recherche.search(result[i].dataset.recherche))    
    
    if(recherche.search(result[i].dataset.recherche) == 0){

        result[i].classList.add('active')

    }

}