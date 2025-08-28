export class Storage {
    private static instance: Storage;

    public static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }
    
    public Set<T>(key: string, object: T) {
        const stringStorage = JSON.stringify(object);
        localStorage.setItem(key, stringStorage);
    }

    public Get<T>(key: string) {
        const storage = localStorage.getItem(key);
        const object = JSON.parse(storage!) as T;
        return object;
    }
    
    public Remove(key: string) {
        localStorage.removeItem(key);
    }

    public Dispose() {
        localStorage.clear();
    }
}