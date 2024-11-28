// app/admin/posts/create.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 模拟创建文章操作（实际开发中需要调用后端 API）
        console.log("文章创建：", { title, content });
        router.push("/admin/posts"); // 创建成功后返回文章列表页面
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">创建新文章</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        文章标题
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        文章内容
                    </label>
                    <textarea
                        id="content"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                >
                    创建文章
                </button>
            </form>
        </div>
    );
}
``