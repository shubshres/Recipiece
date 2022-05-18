// basic blueprint for recipe
export class Recipe 
{
    // elements of recipe
    public name: string; 
    public description: string; 
    public imagePath: string;

    // constructor so we can instantiate recipe with values
    constructor(name: string, description: string, imagePath: string)
    {
        this.name = name; 
        this.description = description; 
        this.imagePath = imagePath; 
    } 
}