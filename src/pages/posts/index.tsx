import React from "react"
import { useGetAllPostsQuery } from "../../app/services/postsApi"
import { CreatePost } from "../../components/create-post"
import { Card } from "../../components/card"

export const Posts = () => {
  const { data } = useGetAllPostsQuery()
  return (
    <>
      <div className="mb-10 w-full">
        <div className="mb-5">
          <CreatePost />
        </div>
        <div className="flex flex-col w-full">
          {data && data.length > 0
            ? data.map(
                ({
                  content,
                  author,
                  id,
                  authorId,
                  comments,
                  likes,
                  likedByUser,
                  createdAt,
                }) => (
                  <div className="flex-1 flex-col mb-3">
                    <Card
                      key={id}
                      avatarUrl={author.avatarUrl ?? ""}
                      content={content}
                      name={author.name ?? ""}
                      likesCount={likes.length}
                      commentsCount={comments.length}
                      authorId={authorId}
                      id={id}
                      likedByUser={likedByUser}
                      createdAt={createdAt}
                      cardFor="post"
                    />
                  </div>
                ),
              )
            : null}
        </div>
      </div>
    </>
  )
}
