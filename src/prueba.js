fetch('./database/db.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            comidas = data;
          })
          .catch((err) => {
            console.log(err);
          });