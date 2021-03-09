// tanımlama
function takvimCevirici(pMiladi, pHicri) {
    let hcr = miladidenHicriye(pMiladi);
    let mld = hicridenMiladiye(pHicri);
    console.log(hcr, mld)
    return "bus ıs tamam";
}

//cagrım
takvimCevirici(2014, 1436);
takvimCevirici(2013, 1421);
takvimCevirici(1903, 1236);

function miladidenHicriye(pMld) {
    let miladiTarih = (pMld - (pMld / 33)) - 621;
    return miladiTarih;
}


function hicridenMiladiye(pHcr) {
    let hicriTarih = (pHcr - (pHcr / 33)) + 622;
    return hicriTarih;
}

//eski modul sistemi
module.exports = {
    mld: miladidenHicriye,
    hcr: hicridenMiladiye
}