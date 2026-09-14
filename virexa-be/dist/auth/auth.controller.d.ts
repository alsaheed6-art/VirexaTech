import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
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
    register(body: {
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
