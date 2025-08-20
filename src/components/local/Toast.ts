import { toaster } from "@/components/ui/toaster"

export class LocalToast {
    private static instance: LocalToast;

    public static getInstance(): LocalToast {
        if (!LocalToast.instance) {
            LocalToast.instance = new LocalToast();
        }
        return LocalToast.instance;
    }

    public Success(message: string) {
        toaster.success({
            description: message,
            duration: 3000
        })
    }

    public Warning(message: string) {
        toaster.warning({
            description: message,
            duration: 3000
        })
    }

    public Error(message: string) {
        toaster.error({
            description: message,
            duration: 3000
        })
    }

    public Info(message: string) {
        toaster.info({
            description: message,
            duration: 3000
        })
    }

    public Loading(message: string) {
        toaster.loading({
            description: message
        })
    }

    public Dispose() {
        toaster.dismiss();
    }
}