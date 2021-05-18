import fs from "fs";

const map = JSON.parse(fs.readFileSync("./first_200_map.json"));
const features = map.features;

const places = [];

for (let feature of features) {
  const place = {
    id: feature.properties.key,
    coordinates: feature.geometry.coordinates
  }

  places.push(place)
}

fs.writeFileSync("./map_places.json", JSON.stringify({places}, null, 2))
