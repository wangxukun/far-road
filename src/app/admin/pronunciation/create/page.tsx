// app/admin/pronunciation/create.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePronunciation() {
    const [englishText, setEnglishText] = useState("");
    const [chineseText, setChineseText] = useState("");
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [topic, setTopic] = useState("");
    const [audioUrl, setAudioUrl] = useState<string | null>(null); // 用于显示音频文件预览
    const router = useRouter();

    const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudioFile(file);
            setAudioUrl(URL.createObjectURL(file)); // 显示上传的音频文件预览
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 模拟提交资源数据（实际开发中需要调用后端 API）
        if (audioFile) {
            const formData = new FormData();
            formData.append("englishText", englishText);
            formData.append("chineseText", chineseText);
            formData.append("audio", audioFile); // 上传音频文件
            formData.append("topic", topic);

            // 发送音频文件至后端（需要实现后端 API）
            console.log("上传资源数据：", { englishText, chineseText, topic, audioFile });

            // 跳转到资源列表页面
            router.push("/admin/pronunciation");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">创建新发音资源</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="englishText" className="block text-sm font-medium text-gray-700">
                        英语文本
                    </label>
                    <input
                        id="englishText"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        value={englishText}
                        onChange={(e) => setEnglishText(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="chineseText" className="block text-sm font-medium text-gray-700">
                        中文文本
                    </label>
                    <input
                        id="chineseText"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        value={chineseText}
                        onChange={(e) => setChineseText(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="audio" className="block text-sm font-medium text-gray-700">
                        上传音频文件
                    </label>
                    <input
                        id="audio"
                        type="file"
                        accept="audio/*"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        onChange={handleAudioChange}
                        required
                    />
                    {audioUrl && (
                        <div className="mt-2">
                            <audio controls src={audioUrl} className="w-full"></audio>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                        话题
                    </label>
                    <input
                        id="topic"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                >
                    创建资源
                </button>
            </form>
        </div>
    );
}
