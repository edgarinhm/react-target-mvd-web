export const getUserLocation = async (): Promise<[number, number]> => {
  if (!navigator.geolocation) {
    throw Error('navigator not supported');
  }
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      error => {
        console.log('no se pudo tener la geolocalizacion', error);
        reject();
      }
    );
  });
};
