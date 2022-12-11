import './style.css'

document.querySelector('#calcular').addEventListener('click', compareSpeeds)

async function getShipSpeed(shipId) {
    let shipData
    try {
        const response = await fetch("https://swapi.dev/api/starships/" + shipId)
        shipData = await response.json()
        return shipData.MGLT
    } catch (error) {
        alert('Se ha producido un error')
    }
}

async function getShipName(shipId) {
    let shipData
    try {
        const response = await fetch("https://swapi.dev/api/starships/" + shipId)
        shipData = await response.json()
        return shipData.name
    } catch (error) {
        alert('Se ha producido un error')
    }
}

async function compareSpeeds() {

    const shipAId = document.querySelector("#naveA").value
    const shipBId = document.querySelector("#naveB").value

    let shipASpeed = await getShipSpeed(shipAId)
    let shipBSpeed = await getShipSpeed(shipBId)

    let shipAname = await getShipName(shipAId)
    let shipBname = await getShipName(shipBId)

    if (shipASpeed > shipBSpeed) {
        document.getElementById("respuesta").innerHTML = shipAname + " es mas rapida que " + shipBname
    } else {
        document.getElementById("respuesta").innerHTML = shipBname + " es mas rapida que " + shipAname
    }
}