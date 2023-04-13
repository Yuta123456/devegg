type Env = Partial<Readonly<typeof import("./env.local.json")>>;

declare namespace NodeJS {
  interface ProcessEnv extends Env {
    TYPE: string;
    PROJECT_ID: string;
    PRIVATE_KEY_ID: string;
    CLIENT_EMAIL: string;
    CLIENT_ID: string;
    AUTH_URI: string;
    TOKEN_URI: string;
    AUTH_PROVIDER_X509_CERT_URL: string;
    CLIENT_X509_CERT_URL: string;
    PRIVATE_KEY: string;
  }
}
