interface ImportMetaEnv {
    readonly VITE_YOUR_URL: string;
    readonly VITE_REALM: string;
    readonly VITE_CLIENT_ID: string;
    VITE_STRIPE_PUBLIC_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}