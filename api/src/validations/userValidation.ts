import { z } from 'zod';

const UserValidation = z.object({
    name: z.string({
        required_error: 'Name is required.',
        invalid_type_error: 'Name must be a string.',
    }).min(3, 'Name must have a minimum of 3 characters.').max(254, 'Name must have a maximum of 3 characters.'),
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string.',
    }).email('Email must be a valid email.'),
    password: z.string({
        required_error: 'Password is required.',
        invalid_type_error: 'Password must be a string.',
    }).min(8, 'Password must have a minimum of 8 characters.'),
});

export default UserValidation;