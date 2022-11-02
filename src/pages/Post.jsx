import React from 'react';
import Modal from '../components/Modal';
import PostForm from '../components/PostForm';

const Post = ({ showModal, setIsModalOpen }) => {
  return (
    <div>
      <Modal>
        <PostForm setIsModalOpen={showModal} />
      </Modal>
    </div>
  );
};

export default Post;
