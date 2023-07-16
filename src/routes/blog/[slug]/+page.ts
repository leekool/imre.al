export const prerender = true;

export async function load({ params }: any) {
    const post = await import(`../${params.slug}.md`);
    const title = post.metadata?.title ?? '';
    const date = post.metadata?.date ?? '';
    const content = post.default ?? '';
    const category = post.metadata?.category ?? '';

    return {
        content,
        title,
        date,
        category
    };
}
