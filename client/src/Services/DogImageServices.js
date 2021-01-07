const axios = require("axios");
const url = "http://localhost:3000/api/image/";

class DogImageService {
  static getDogImages(id) {
    return new Promise((resolve, reject) => {
      try {
        let data = [];
        axios
          .get(`${url}${id}`)
          .then((response) => {
            data = response.data;
            resolve(data)
          })
          .catch((err) => console.error(err.message));
      } catch (err) {
        reject(err);
      }
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      try {
        let data = [];
        axios
          .get(url)
          .then((response) => {
            data = response.data;
            resolve(data)
          })
          .catch((err) => console.error(err.message));
      } catch (err) {
        reject(err);
      }
    });
  }

  static postDogImage(dogImage) {
    // dogImage.image = dogImage.image.replace(/\'/g, "''")

    return axios.post(
      url,
      {
        dog_id: dogImage.dog_id,
        image: dogImage.image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  static deleteDogImage(id) {
    return axios.delete(`${url}${id}`);
  }
}

module.exports = DogImageService;
