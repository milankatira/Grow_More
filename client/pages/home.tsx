import axios from 'axios';
import React, { useEffect } from 'react';
import CreatePost from '../components/Home/CreatePost';
import Main from '../components/Home/Main';
import Post from '../components/Home/Post';
import { authPost_url } from '../constant/apiUrl';
import { PostProvider, usePostcontext } from '../context/store/Post';
// import {} from '..'
const home = ({ userData }) => {
  // const postData = { PostData, dispatch, Post_api v};
  // const { PostData, Post_api } = usePostcontext();
  // console.log(PostData,"dd")
  // useEffect(() => {
  //   Post_api.MyPost();
  // }, []);
  return (
    <PostProvider>
      <Main />
    </PostProvider>
  );
};

export default home;

// authPost_url;

// export async function getServerSideProps({ req }) {
//   const res = await axios.get(authPost_url, {
//     withCredentials: true,
//     headers: {
//       'Access-Control-Allow-Credentials': true,
//       Cookie: req?.headers?.cookie,
//     },
//   });
//   const data = await res.data;
//   return { props: { userData: data } };
// }
