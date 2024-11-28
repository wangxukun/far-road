// app/admin/posts.tsx
import Link from "next/link";

interface Post {
    id: string;
    title: string;
    createdAt: string;
}

const posts: Post[] = [
    { id: "1", title: "如何学习英语", createdAt: "2024-11-28" },
    { id: "2", title: "Next.js 入门教程", createdAt: "2024-11-27" },
    { id: "3", title: "TailwindCSS 基础", createdAt: "2024-11-26" },
];

export default function Posts() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">文章管理</h1>
            <div className="mb-4">
                <Link
                    href="/admin/posts/create"
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                >
                    创建新文章
                </Link>
            </div>
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                <thead>
                <tr>
                    <th className="px-6 py-3 border-b">标题</th>
                    <th className="px-6 py-3 border-b">创建时间</th>
                    <th className="px-6 py-3 border-b">操作</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td className="px-6 py-4 border-b">{post.title}</td>
                        <td className="px-6 py-4 border-b">{post.createdAt}</td>
                        <td className="px-6 py-4 border-b">
                            <Link
                                href={`/admin/posts/edit/${post.id}`}
                                className="text-blue-600 mr-4"
                            >
                                编辑
                            </Link>
                            <button className="text-red-600">删除</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
