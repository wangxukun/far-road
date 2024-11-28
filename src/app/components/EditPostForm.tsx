// app/admin/posts/edit/EditPostForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface PostData {
    id: string;
    title: string;
    content: string;
}

export default function EditPostForm({ initialData }: { initialData: PostData }) {
    const [title, setTitle] = useState(initialData.title);
    const [content, setContent] = useState(initialData.content);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 模拟编辑文章操作
        console.log("文章编辑：", { title, content });
        router.push("/admin/posts");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">编辑文章</h1>
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
                    更新文章
                </button>
            </form>
        </div>
    );
}