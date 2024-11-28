// app/admin/posts/edit/page.tsx

import EditPostForm from "@/components/EditPostForm";

export default async function EditPost({params}: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    // 在服务器组件中获取数据
    const postData = {
        id: id,
        title: "编辑的文章标题",
        content: "编辑的文章内容",
    };

    return <EditPostForm initialData={postData} />;
}
