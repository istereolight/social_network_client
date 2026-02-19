import React from "react"
import { useParams } from "react-router-dom"
import {
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,
} from "../../app/services/postsApi"
import { Card } from "../../components/card"
import { GoBack } from "../../components/go-back"
import { comment } from "postcss"
import { CreateComment } from "../../components/create-comment"

export const CurrentPost = () => {
  const params = useParams<{ id: string }>()
  const { data } = useGetPostByIdQuery(params?.id ?? "")

  if (!data) {
    return <h2>Такого поста не существует</h2>
  }

  const {
    content,
    id,
    authorId,
    comments,
    likes,
    author,
    likedByUser,
    createdAt,
  } = data

  return (
    <>
      <GoBack />
      <Card
        cardFor="current-post"
        avatarUrl={author.avatarUrl ?? ""}
        content={content}
        name={author.name ?? ""}
        likesCount={likes.length}
        commentsCount={comments.length}
        authorId={authorId}
        id={id}
        likedByUser={likedByUser}
        createdAt={createdAt}
      />
      <div className="mt-5 ml-6 ">
        {data.comments
          ? data.comments.map((comment) => (
              <div className="m-3">
                <Card
                  cardFor="comment"
                  key={comment.id}
                  avatarUrl={comment.user.avatarUrl ?? ""}
                  content={comment.content}
                  name={comment.user.name ?? ""}
                  authorId={comment.userId}
                  commentId={comment.id}
                  id={id}
                />
              </div>
            ))
          : null}
      </div>
      <CreateComment />
    </>
  )
}
