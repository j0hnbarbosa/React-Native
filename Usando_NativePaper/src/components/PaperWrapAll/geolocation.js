
export const findCurrentCoordinates = () => {

  return new Promise((res, rej) => {

    navigator.geolocation.getCurrentPosition(
      response =>
        (
          {
            latitude, longitude
          }
        )

      , rej,
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
    )
  )
}
}

// export const findCoordinates = () => {
//   // const vlr = findItNow();
//   // console.log("now: ", vlr);
//   // debugger
//   return findItNow().then((v) => {
//     // debugger
//     return (
//       {

//         longitude: v.coords.latitude,
//         latitude: v.coords.longitude,
//       }
//     )
//   }
//   )

// }
