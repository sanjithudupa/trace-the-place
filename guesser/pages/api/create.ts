import type { NextApiRequest, NextApiResponse } from 'next'
import places from "../../util/places.json";

const place_array = places.places;

export default (_: NextApiRequest, res: NextApiResponse) => {
    const place = place_array[Math.floor(Math.random()*place_array.length)];
    res.status(200).json({ id: place.id });
}