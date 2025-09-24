import connectDB from "@/lib/connectDB";
import Comment from "@/models/commentSchema";

export async function GET() {
  try {
    await connectDB();
    const comments = await Comment.find();
    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error fetching comments", { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json(); // ✅ parse incoming JSON
    const newComment = new Comment(body);
    await newComment.save();

    return new Response(
      JSON.stringify({ message: "Comment added successfully" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error adding comment" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
