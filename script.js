
function calculoCarne(){

    let calculoHomem = document.getElementById("homem").value * 0.500
    let calculoMulher = document.getElementById("mulher").value * 0.300
    let calculoCrianca = document.getElementById("crianca").value * 0.200
    let calculoTotalCarne = (calculoHomem + calculoMulher + calculoCrianca).toFixed(1)

    return calculoTotalCarne
}

function calculoFrango(){

    let calculoHomem = document.getElementById("homem").value * 0.200
    let calculoMulher = document.getElementById("mulher").value * 0.200
    let calculoCrianca = document.getElementById("crianca").value * 0.100
    let calculoTotalFrango = (calculoHomem + calculoMulher + calculoCrianca).toFixed(1)

    return calculoTotalFrango
}

function calculoLinguica(){

    let calculoHomem = document.getElementById("homem").value * 0.200
    let calculoMulher = document.getElementById("mulher").value * 0.200
    let calculoCrianca = document.getElementById("crianca").value * 0.200
    let calculoTotalLinguica = (calculoHomem + calculoMulher + calculoCrianca).toFixed(1)

    return calculoTotalLinguica
}

function calculoRefrigerante(){

    let calculoHomem = document.getElementById("homem").value * 0.300
    let calculoMulher = document.getElementById("mulher").value * 0.400
    let calculoCrianca = document.getElementById("crianca").value * 0.200
    let calculoTotalRefri = (calculoHomem + calculoMulher + calculoCrianca).toFixed(1)

    return calculoTotalRefri
}

function calculoCerveja(){

    let calculoHomem = document.getElementById("homem").value * 0.800
    let calculoMulher = document.getElementById("mulher").value * 0.500
    let calculoCrianca = document.getElementById("crianca").value * 0
    let calculoTotalCerv = (calculoHomem + calculoMulher + calculoCrianca).toFixed(1)

    return calculoTotalCerv
}

function calculoFinal(calculoTotalCarne, calculoTotalFrango, calculoTotalLinguica,calculoTotalRefri, calculoTotalCerv){

    document.getElementById("resCarne").innerHTML = calculoTotalCarne
    document.getElementById("resFrango").innerHTML = calculoTotalFrango
    document.getElementById("resLinguica").innerHTML = calculoTotalLinguica
    document.getElementById("resRefri").innerHTML = calculoTotalRefri
    document.getElementById("resCerv").innerHTML = calculoTotalCerv
    

}