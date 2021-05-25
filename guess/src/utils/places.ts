import { places } from "./places.json";

interface Place {
    id: "string",
    coordinates: number[]
}

const getRandomPlace = (): string => {
    return places[Math.floor(Math.random() * places.length)].id;
}

const getCoordinates = (guess: string): Place | undefined => {
    for (let place of places) {
        if (guess == place.id)
            return place as Place
    }

    return undefined;
}

export {
    getRandomPlace,
    getCoordinates
}