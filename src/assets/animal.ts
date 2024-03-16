export class Animal {
    Age: number;
    Gender: string;
    ID: number;
    IsPregnant: boolean;
    Name: string;
    Type: string;
    Weight: number;

    constructor(age: number = 0, gender: string = "", id: number = 0, isPregnant: boolean = false, name: string = "", type: string = "", weight: number = 0)
    {
        this.Age = age;
        this.Gender = gender;
        this.ID = id;
        this.IsPregnant = isPregnant;
        this.Name = name;
        this.Type = type;
        this.Weight = weight;
    }
}