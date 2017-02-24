/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
  console.log('--- reducer users ---');
  return [
    {
      "id": 1,
      "name": "Sentinel-class landing craft",
      "model": "Sentinel-class landing craft",
      "hyperdrive_rating": "1.0",
      "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
      "thumbnail": "http://placehold.it/250x250"
    },
    {
      "id": 2,
      "name": "Death Star",
      "model": "DS-1 Orbital Battle Station",
      "hyperdrive_rating": "4.0",
      "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
      thumbnail: "http://placehold.it/250x250"
    },
    {
      "id": 3,
      "name": "Millennium Falcon",
      "model": "YT-1300 light freighter",
      "hyperdrive_rating": "0.5",
      "manufacturer": "Corellian Engineering Corporation",
      thumbnail: "http://placehold.it/250x250"
    }
  ];
}
