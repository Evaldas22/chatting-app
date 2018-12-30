import { generateUser } from "../../static-data";

export default function userReducer(state = generateUser(), action) {
    return state;
}