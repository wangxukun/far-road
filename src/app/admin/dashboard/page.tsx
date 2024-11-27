// app/admin/page.tsx
"use client";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">管理员仪表盘</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">文章管理</h2>
                    <p>查看、创建、编辑和删除博客文章。</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">评论管理</h2>
                    <p>管理博客文章下的评论。</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">用户管理</h2>
                    <p>管理系统用户。</p>
                </div>
            </div>
        </div>
    );
}
