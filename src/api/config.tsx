// This is the main address of your Laravel backend
export const BASE_URL = "https://taxi.qaramurt.kz";

// This is the part for the rider (user) app
export const API_URL = `${BASE_URL}/api/rider`;

// Now we make all the important addresses the app needs
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const PROFILE_URL = `${API_URL}/profile`;
export const UPDATE_PROFILE_URL = `${API_URL}/update-profile`;
export const TRIPS_URL = `${API_URL}/trips`;
export const BOOK_RIDE_URL = `${API_URL}/book-ride`;
export const NEARBY_DRIVERS_URL = `${API_URL}/nearby-drivers`;
// Add more if you see them in the code later, but these are the main ones