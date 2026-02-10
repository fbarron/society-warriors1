export type User = {
    id: string
    studentId: string
    name: string
    email: string
    password: string
    university: string
    joinedSocieties: string[]
    role: 'student' | 'admin'
}