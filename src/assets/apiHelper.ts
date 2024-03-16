import { Animal } from './animal';
let url = "https://oswd-cg.azurewebsites.net/api/zoo/animals/";

export async function getAnimals(): Promise<Array<Animal>> {
    var api = await fetch(url);
    if (api.status < 400) {
        return processApi(await api.json());
    } else {
        return [];
    }
}

export async function addAnimal(animal: Animal) {
    var api = await fetch(url, {method : "POST", headers : {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(animal)});
    if (api.status < 400) {
        return await processApi(await api.json());
    } else {
        return [];
    }
}

export async function updateAnimal(animal: any) {
    var api = await fetch(url, {method: "PUT", headers : {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(animal)});
    if (api.status < 400) {
        return await processApi(await api.json());
    } else {
        return [];
    }
}

export async function deleteAnimal(animal: any) {
    var api = await fetch(url, {method: "DELETE", headers : {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(animal)});
    if (api.status < 400) {
        return await processApi(await api.json());
    } else {
        return [];
    }
}

function processApi(response: any) : Array<Animal> {
    var animals: Array<Animal> = [];
    response.payload.forEach((animal: any) => {
        animals.push(new Animal(animal.age, animal.gender, animal.id, animal.isPregnant, animal.name, animal.type, animal.weight));
    });
    return animals;
}