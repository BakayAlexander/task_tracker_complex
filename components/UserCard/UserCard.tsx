import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { User } from '../../typings';

import styles from './userCard.module.css';

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.userCardContainer}>
      <img
        className={styles.userCardImage}
        src={user.avatar || ''}
        alt='Profile icon'
      />
      <div className={styles.userCardInfo}>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <p>{user.email}</p>
      </div>
      <div className={styles.userCardMail}>
        <a
          className={styles.userCardMailButton}
          href={`mailto:${user.email}`}
        >
          <AiOutlineMail className='h-7 w-7' />
        </a>
      </div>
    </div>
  );
};
export default UserCard;
