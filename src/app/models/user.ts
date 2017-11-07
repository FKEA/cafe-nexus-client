import { Event } from "./event";
import { Post } from "./post";

export class User{
    id: number;
    firstName: String;
    lastName: String;
    email: String;
    description: String;
    gender: String;
    major: String;
    semester: number;
    events: Event[];
    posts: Post[];
}