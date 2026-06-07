const Blog = require("./Blog");

// Create
await Blog.create({
 title:"First Blog",
 content:"Hello"
});

// Read
const blogs = await Blog.find();

// Update
await Blog.findByIdAndUpdate(id,{
 title:"Updated Blog"
});

// Delete
await Blog.findByIdAndDelete(id);