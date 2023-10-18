import sampleInput from '../mock/sampleinput';

class PlaceService {
    static async getPlaces() {
        const maxNum = 8;
        return sampleInput.slice(0, maxNum);
    }
}

export default PlaceService;