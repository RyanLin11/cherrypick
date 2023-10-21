import sampleInput from '../mock/sampleinput';

export const maxNum = 8;

class PlaceService {
    static async getPlaces() {
        return sampleInput.slice(0, maxNum);
    }
}

export default PlaceService;