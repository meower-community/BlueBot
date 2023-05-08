export interface Context {
    user: string;
    args: string[];
    origin: string;
    reply: (content: string) => void;
    post: (content: string) => void;
}
