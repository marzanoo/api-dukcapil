"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api, setAuthToken } from "@/lib/api";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setAuthToken(response.data.token);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login gagal", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Login Admin
      </h2>
      <div className="mb-4">
        <Label text="Email" htmlFor="email" />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Label text="Password" htmlFor="password" />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button text="Login" onClick={() => {}} className="w-full mt-3" />
    </form>
  );
}
