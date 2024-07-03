import React, { useState } from 'react'

import { CardHeader, Card as NextUiCard } from '@nextui-org/react'
import { useLikePostMutation, useUnlikePostMutation } from '../../app/services/likesApi';
import { useDeletePostMutation, useLazyGetAllPostsQuery, useLazyGetPostByIdQuery } from '../../app/services/postsApi';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../features/user/userSlice';

type Props = {
  avatarUrl: string;
  name: string;
  autorId: string;
  commentId?: string;
  likesCount?: number;
  commentsCount?: number;
  createdAt?: Date;
  id?: string;
  cardFor: 'comment' | 'post' | 'current-post';
  likedByUser?: boolean
}

export const Card: React.FC<Props> = ({
  avatarUrl = '',
  name= '',
  autorId = '',
  commentId = '',
  likesCount = 0,
  commentsCount = 0,
  createdAt = Date,
  id = '',
  cardFor = 'post',
  likedByUser = false
}) => {

  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();
  const [triggerAllPosts] = useLazyGetAllPostsQuery();
  const [triggerGetPostById] = useLazyGetPostByIdQuery();
  const [deletePost, deletePostStatus] = useDeletePostMutation();
  const [deleteComment, deleteCommentStatus] = useDeletePostMutation();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrent);

  return (
    <NextUiCard>
      <CardHeader className='justify-between items-center bg-transparent'>
        <Link to={`/users/${autorId}`}>
        </Link>
      </CardHeader>
    </NextUiCard>
  )
}
