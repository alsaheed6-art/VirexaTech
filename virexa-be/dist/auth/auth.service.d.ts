import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        role: "employer" | "candidate";
    } | null>;
    login(email: string, password: string): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
            role: "employer" | "candidate";
        };
    }>;
    register(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        role: 'employer' | 'candidate';
    }): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
            role: "employer" | "candidate";
        };
    }>;
}
