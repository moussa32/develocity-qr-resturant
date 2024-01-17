import axios from "axios";

export const globalInstance = axios.create({
  baseURL: "https://restaurant.develocity.link/api",
  headers: {
    app_api_key:
      "jSxmLhazjtgaGLWYDNG%^&48MlTtfXOgn3qlcy!*XufXOg0@~n3qlcyJjsOfMoCs",
  },
});
