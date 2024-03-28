'use client'
import React from 'react'
import { useQuery, useMutation, useQueryClient, } from 'react-query';
import { Suspense } from 'react';

const ReactQuery = () => {

    //get -----------------------
    const getrepos = async () => {
        const response = await fetch(`https://api.github.com/users/JhonItalo/repos`);
        const data = await response.json();
        return data
    }
    const { isLoading, error, data } = useQuery('repoData', getrepos, {
        retry: 5
    })
    //get -----------------------
    //post >>>>>>>>>>>>
    const addPost = async (newPost: { title: string, descript: string }) => {
        return fetch("/api/posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        }).then((res) => res.json())
    }

    const queryClient = useQueryClient();

    const mutation = useMutation(addPost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });
    //post >>>>>>>>>>>>
    const onSubmit = (e: any) => {
        e.preventdefault()
        mutation.mutate({ title: e.target.title.value, descript: e.target.descript.value })
    }

    return (

        <div>
            ReactQuery
            {isLoading && <p>loading</p>}
            {data && (
                <div>
                    {data.map((item: any) => (
                        <p key={item.id}>{item.name}</p>
                    ))}
                </div>
            )}
            {error && <p>verifique sua conexão com a internet</p>}
            {/* with suspense */}
            supense
            <Suspense fallback={<p>loading supense</p>} >
                <T data={data} />
            </Suspense>



        </div >
    )
}
const T = ({ data }: { data: any }) => {
    return (<>
        <div>
            {data && data.map((item: any) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>

    </>)
}

export default ReactQuery