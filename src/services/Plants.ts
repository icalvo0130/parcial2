// TODO: arregla typos de "error", maneja caso de error y exito
export async function getPlants(): Promise<any> {
    return [
    fetch('http://192.168.131.101:8080/dca/api/plants')
  .then((response) => {
    if (!response.ok) {
      return response.json();
    } else {
      throw new Error("no funciono el fetch");
    }
  })
  .then((response) => {
    const respuestaApi = response.json();

  })
  .catch((error) => {
    console.error(error);
    })
    ]
}
