const resultado = document.querySelector(".botao")

const selecaoo = document.querySelector(".selecao")

function convertValue() {


    const valorparaconverter = document.querySelector(".valor")

    const valorfinal = document.querySelector(".valor-dolar")

    const valorinput = document.querySelector(".inp").value

    console.log(selecaoo.value)

    const valordodolar = 5.62
    const valordoeuro = 6.27
    const valordoiene = 0.04
    

    const valorconvertido = valorinput 

    if (selecaoo.value == "dolar") {
        //se estiver dolar entre aqui//
        valorfinal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorconvertido / valordodolar)
    }
    if (selecaoo.value == "euro") {
        //se for dolar entre aqui//
        valorfinal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorconvertido / valordoeuro)
    }
    if (selecaoo.value == "iene") {
        //se for dolar entre aqui//
        valorfinal.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valorconvertido / valordoiene)
    }

    valorparaconverter.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valorinput)

} 

function trocoudemoeda() {
    const dolarus = document.querySelector(".moeda-us")
    const imagem = document.querySelector(".imagem-moeda")

    if (selecaoo.value == "dolar"){
     dolarus.innerHTML = "Dólar Americano" 
     imagem.src = " ./assets/usa.png"

    }
    if (selecaoo.value == "euro"){
        dolarus.innerHTML = "Euro" 
        imagem.src = "./assets/euro.png"
       }
       if (selecaoo.value == "iene"){
        dolarus.innerHTML = "Iene Japones" 
        imagem.src = "./assets/iene.png"
        }
       convertValue() 
}
selecaoo.addEventListener("change", trocoudemoeda)
resultado.addEventListener("click", convertValue)