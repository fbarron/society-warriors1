import { User } from "../types/user"
import { Society } from "../types/society"
import { Post } from "../types/post"

export const users: User[] = [
    // Predefined admin user
    {
        id: '1',
        studentId: '00000000',
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'adminpassword',
        university: 'Example University',
        joinedSocieties: [],
        role: 'admin'
    },
    // Mock users for testing
    {
        id: '2',
        studentId: '12345678',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        university: 'Example University',
        joinedSocieties: [],
        role: 'student'
    }
]
export const societies: Society[] = [
    // Mock society for testing
    {
        id: '1',
        name: 'Computer Science Society',
        university: 'Robert Gordon University', //change to enum maybe?
        category: 'Academic',
        description: 'A society for computer science enthusiasts.',
        members: ['2'], // John Doe is a member
        admins: ['1'] // Admin User is an admin
    },

    {
        id: '2',
        name: 'Gaming Society',
        university: 'Robert Gordon University',
        category: 'Recreational',
        description: 'A society for gaming enthusiasts.',
        members: ['2'], // John Doe is a member
        admins: ['1'] // Admin User is an admin
    }
]
export const posts: Post[] = [
    // Mock post for testing
    {
        id: '1',
        societyId: '1', // Computer Science Society
        title: 'Welcome to the Computer Science Society!',
        content: 'We are excited to have you here. Stay tuned for upcoming events and activities.',
        membersOnly: false,
        createdAt: new Date().toISOString()
    }
]