export class Groom {
    public static INSTANCE : Groom = new Groom();

    private constructor(){}

    public hello(): string{
        return [
            "Welcome", 
            "Hello", 
            "Ciao", 
            "Yo"][Math.floor(Math.random()*4)]
    }
}
