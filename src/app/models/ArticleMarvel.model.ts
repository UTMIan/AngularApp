export class Personajes {
    id: string = "";
    name: string = "";
    description: string = "";
    modified: Date = new Date;
    thumbnail: {path: string, extension: string}={path:"", extension:""};
}