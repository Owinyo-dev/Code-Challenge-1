function bodabodaFare(){
    let distanceTraveled=prompt("How many kilometers are you traveling")
    let traveledDistance=Number(distanceTraveled)
    const baseFare=50;
    const chargeperKm= 15*traveledDistance;
    const totalFare=baseFare+chargeperKm
    console.log(`So distance yako ni ${traveledDistance} km.\nFare ya kukalia pikipiki itakuwa ${baseFare} bob.\n Na ya kufika huko itakuwa ${chargeperKm} bob\nSo total itakuwa ${totalFare}bob.`);
}
bodabodaFare()