import style from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={style.notification}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
