export interface Card {
    id: string,
    price: number,
    name: string,
    rating: number,
    location: string,
    description: string,
    form: string,
    length: string,
    width: string,
    height: string,
    tank: string,
    consumption: string,
    transmission: string,
    engine: string,
    AC: boolean,
    bathroom: boolean,
    kitchen: boolean,
    TV: boolean,
    radio: boolean,
    refrigerator: boolean,
    microwave: boolean,
    gas: boolean,
    water: boolean,
    gallery: { thumb: string; original: string }[];
    reviews: { reviewer_name: string; reviewer_rating: number; comment: string }[];
}

