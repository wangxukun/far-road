// app/admin/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            // 模拟登录成功，跳转到后台首页
            router.push("/admin/dashboard");
        } else {
            setError("用户名或密码错误");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-96"
            >
                <h2 className="text-2xl font-bold text-center mb-6">管理员登录</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        用户名
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        密码
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="text-red-600 text-sm">{error}</div>}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-4">
                    登录
                </button>
            </form>
        </div>
    );
}
