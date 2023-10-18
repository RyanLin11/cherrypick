class RoomService {
    static getAvailableRoom() {
        const min = 1000; // Minimum value (inclusive)
        const max = 9999; // Maximum value (inclusive)
        const randomPIN = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomPIN;
    }
    static getUsers() {
        return ["Frank", "Ryan", "Edward", "Vanness"];
    }
}

export default RoomService;