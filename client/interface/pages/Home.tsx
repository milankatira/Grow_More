export interface Ilike {
  likedUserId:string;
  likedData:Date;
  
}

export interface Isignup {
  postText: string;
  postMedia: string;
  postType: 'text' | 'image' | 'video';
  postedBy: string;
  usersLikePost: string;
  likes: string;

  // likes: [{ type: ObjectId; ref: 'User' }];
}
