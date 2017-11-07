import { User } from "./user";
import { Post } from "./post";

export class Event {
    id: number;
    title: String;
    created: Date;
    owner: number;
    startDate: Date;
    endDate: Date;
    description: String;
    participants: User[];
    posts: Post[];
}