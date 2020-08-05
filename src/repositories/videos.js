import config from '../config';

const URL_VIDEOS = `${config.BACKEND_URL}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const jsonResponse = await serverResponse.json();
        return jsonResponse;
      }
      throw new Error('Não foi possivel cadastrar os dados');
    });
}

export default {
  create,
};
