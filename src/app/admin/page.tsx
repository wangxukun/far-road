"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // 在此模拟登录状态（可以替换为 JWT 验证）
        const isLoggedIn = false; // 此处应检查本地存储中的登录状态或令牌
        if (!isLoggedIn) {
            redirect("/admin/login");
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    if (!isAuthenticated) {
        return <div>Loading...</div>; // 可以显示加载状态
    }
}