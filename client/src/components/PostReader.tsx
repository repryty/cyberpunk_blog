function PostReader({ title, content }: { title: string; content: string }) {
    return (
        <>
            <h1>{title}</h1>
            <hr/>
            <p>{content}</p>
        </>
    )
}

export default PostReader