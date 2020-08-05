import config from '../config';

const URL_CATEGORIES = `${config.BACKEND_URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const jsonResponse = await serverResponse.json();
        return jsonResponse;
      }
      throw new Error('Não foi possivel pegar os dados do servidor');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const jsonResponse = await serverResponse.json();
        return jsonResponse;
      }
      throw new Error('Não foi possivel pegar os dados do servidor');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
