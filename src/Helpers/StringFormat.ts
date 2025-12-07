export class StringFormat {

    public static IsNullOrEmpty(value: string | undefined | null): boolean {
        return value == null || value == undefined || value.trim() === "";
    }
}