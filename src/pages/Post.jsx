import React from 'react';
import Modal from '../components/Modal';
import PostForm from '../components/PostForm';

const Post = () => {
  return (
    <div>
      <Modal>
        <PostForm />
      </Modal>
    </div>
  );
};

export default Post;
