import axios from '../utils/axiosConfig';

// Fonction pour la connexion
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post('/auth/login', credentials);
    return response.data; // Retourne les données utilisateur après la connexion
  } catch (error) {
    throw new Error('Login failed');
  }
};

// Fonction pour l'inscription
export const signUpUser = async (credentials) => {
  try {
    const response = await axios.post('/auth/signup', credentials);
    return response.data; // Retourne les données utilisateur après l'inscription
  } catch (error) {
    throw new Error('Sign up failed');
  }
};
