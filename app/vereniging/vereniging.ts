import { Student } from '../student/student';

export class Vereniging {
id?: number;
naam: string;
voorzitter: Student;
students: Student[];
}