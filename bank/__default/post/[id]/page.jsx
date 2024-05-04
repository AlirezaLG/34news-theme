import Link from "next/link";
import { notFound } from "next/navigation"



export const dynamicParams = true;
// index all data for static generation
export async function generateStaticParams(){
    const res = await fetch("http://localhost:4000/tickets");
    const posts = await res.json();
    return (posts.map((post) => {
        id: post.id
    }))
}


async function getPost(id){
        const res = await fetch("http://localhost:4000/tickets/" + id ,{
            next:{
                revalidate: 10,
            }
        });

        if (!res.ok){
             notFound();
        }

        return res.json();
}

export default async function postpage({params}) {
    const post = await getPost(params.id)
    return (
        <>
        <h2>page {post.id}</h2>
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/`}>Back</Link>
        </div>
        </>
    )

}
