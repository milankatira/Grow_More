import { server_url } from '../config/appConfig';

//TODO AUTH URL

export const login_url = `${server_url}/api/signin`;

export const signup_url = `${server_url}/api/register`;

export const logout_url = `${server_url}/api/logout`;

export const forgot_password_url = `${server_url}/api/forgot`;

export const Auth_user=`${server_url}/api/myProfile`;

export const reset_password_url = (token: string) =>
  `${server_url}/api/reset/:${token}`;

//TODO POST
export const createPost_url = `${server_url}/api/postCreate`;

export const authPost_url = `${server_url}/api/authPost`;

export const DeletePost_url = (postId: string) =>
  `${server_url}/api/deletePost/${postId}`;

//TODO COMMENTS
export const comment_url = (postId: string) =>
  `${server_url}/api/comment/${postId}`;

export const like_comment_url = (postId: string) =>
  `${server_url}/api/likeComment/${postId}`;

export const dislike_comment_url = (postId: string) =>
  `${server_url}/api/dislikeComment/${postId}`;

//TODO like
export const like_url = (postId: string) =>
  `${server_url}/api/likePost/${postId}`;


//TODO SuggestedUsers

export const suggestedUsers_url = `${server_url}/api/getusers`;