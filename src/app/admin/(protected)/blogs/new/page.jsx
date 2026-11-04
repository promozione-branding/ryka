import { requireAdmin } from "@/lib/auth";
import BlogForm from "@/components/admin/BlogForm";

export default async function NewBlog() {
  await requireAdmin();
  return (
    <>
      <h1 className="mb-6 text-[1.7rem] font-extrabold tracking-tight text-[#0b1623]">Add blog</h1>
      <BlogForm />
    </>
  );
}