//import sampleInput from '../mock/sampleinput';

export const maxNum = 8;

const SERVER_ADDRESS = "http://localhost:3001"
const RESTAURANT_ENDPOINT = "/"

class PlaceService {
    static async getPlaces() {
        const sampleData = await fetch(SERVER_ADDRESS + RESTAURANT_ENDPOINT);
        const sampleInput = await sampleData.json();
        return sampleInput.slice(0, maxNum);
    }
}

export default PlaceService;