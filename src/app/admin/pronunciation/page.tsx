// app/admin/pronunciation/index.tsx
import Link from "next/link";

interface PronunciationResource {
    id: string;
    englishText: string;
    chineseText: string;
    audioUrl: string;
    topic: string;
    createdAt: string;
    updatedAt: string;
}

const pronunciationResources: PronunciationResource[] = [
    {
        id: "1",
        englishText: "Hello",
        chineseText: "你好",
        audioUrl: "https://example.com/audio/hello.mp3",
        topic: "Basic Phrases",
        createdAt: "2024-11-28",
        updatedAt: "2024-11-28",
    },
    {
        id: "2",
        englishText: "Good Morning",
        chineseText: "早上好",
        audioUrl: "https://example.com/audio/good-morning.mp3",
        topic: "Basic Phrases",
        createdAt: "2024-11-27",
        updatedAt: "2024-11-27",
    },
    {
        id: "3",
        englishText: "Thank you",
        chineseText: "谢谢",
        audioUrl: "https://example.com/audio/thank-you.mp3",
        topic: "Gratitude",
        createdAt: "2024-11-26",
        updatedAt: "2024-11-26",
    },
];

export default function PronunciationIndex() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">英语发音资源管理</h1>
            <div className="mb-4">
                <Link
                    href="/admin/pronunciation/create"
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                >
                    创建新发音资源
                </Link>
            </div>
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                <thead>
                <tr>
                    <th className="px-6 py-3 border-b">英语文本</th>
                    <th className="px-6 py-3 border-b">中文文本</th>
                    <th className="px-6 py-3 border-b">话题</th>
                    <th className="px-6 py-3 border-b">操作</th>
                </tr>
                </thead>
                <tbody>
                {pronunciationResources.map((resource) => (
                    <tr key={resource.id}>
                        <td className="px-6 py-4 border-b">{resource.englishText}</td>
                        <td className="px-6 py-4 border-b">{resource.chineseText}</td>
                        <td className="px-6 py-4 border-b">{resource.topic}</td>
                        <td className="px-6 py-4 border-b">
                            <Link
                                href={`/admin/pronunciation/edit/${resource.id}`}
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
