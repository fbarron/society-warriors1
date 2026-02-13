"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; username?: string; password?: string }>({});

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: { email?: string; username?: string; password?: string } = {};
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Proceed with register logic
    }
  }

  return (
    <main className="flex-1 flex items-center justify-center bg-palette-1">
      <form className="bg-palette-5 p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit} noValidate>
        <h2 className="text-2xl font-bold mb-6 text-center text-palette-4">Register</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-palette-4">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-palette-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-palette-3 bg-palette-1 text-palette-4"
            required
            autoComplete="username"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-medium text-palette-4">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border border-palette-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-palette-3 bg-palette-1 text-palette-4"
            required
            autoComplete="username"
          />
          {errors.username && (
            <div className="text-red-500 text-sm mt-1">{errors.username}</div>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium text-palette-4">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-palette-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-palette-3 bg-palette-1 text-palette-4"
            required
            autoComplete="new-password"
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">{errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-palette-3 text-palette-4 py-2 rounded font-semibold hover:bg-palette-4 hover:text-palette-1 transition"
        >
          Register
        </button>
      </form>
    </main>
  );
}
