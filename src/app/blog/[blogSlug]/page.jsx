"use client";

const blogPost = ({params}) => {
    
    console.log(params);

    return (
        <>
            <p>This is a blog post with the slug {params.blogSlug}</p>
        </>
    )
}

export default blogPost;