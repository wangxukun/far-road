"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ResourceData {
    id: string;
    englishText: string;
    chineseText: string;
    audioUrl: string;
    topic: string;
}

export default function EditPronunciationForm({
                                                  initialData
                                              }: {
    initialData: ResourceData
}) {
    const [englishText, setEnglishText] = useState(initialData.englishText);
    const [chineseText, setChineseText] = useState(initialData.chineseText);
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [audioUrl, setAudioUrl] = useState<string>(initialData.audioUrl);
    const [topic, setTopic] = useState(initialData.topic);
    const router = useRouter();

    const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudioFile(file);
            setAudioUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("englishText", englishText);
        formData.append("chineseText", chineseText);
        if (audioFile) {
            formData.append("audio", audioFile);
        }
        formData.append("topic", topic);

        // 模拟提交资源数据
        console.log("编辑资源数据：", {
            englishText,
            chineseText,
            topic,
            audioFile
        });

        router.push("/admin/pronunciation");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-6">编辑发音资源</h1>
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
                    更新资源
                </button>
            </form>
        </div>
    );
}