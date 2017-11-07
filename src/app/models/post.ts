import { User } from "./user";

export class Post {
    id: number;
    created: Date;
    owner: User;
    content: String;
    event: Event;
    parent: Post;
    comments: Post[];
}