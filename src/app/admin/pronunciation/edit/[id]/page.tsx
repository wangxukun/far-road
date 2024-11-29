// app/admin/pronunciation/edit/[id].tsx
import EditPronunciationForm from '@/components/EditPronunciationForm';

export default async function EditPronunciationPage({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    // 在服务器端获取初始数据
    const resourceData = {
        id: id,
        englishText: "Hello",
        chineseText: "你好",
        audioUrl: "https://example.com/audio/hello.mp3",
        topic: "Basic Phrases",
    };

    return <EditPronunciationForm initialData={resourceData} />;
}