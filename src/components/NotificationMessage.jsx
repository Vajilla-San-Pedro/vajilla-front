const NotificationMessage = ({ notificationMessage }) => {
  return (
    notificationMessage && (
      <div className="fixed z-30 top-0 left-0 right-0 bg-gray-400 text-white text-center py-2">
        {notificationMessage}
      </div>
    )
  );
};

export default NotificationMessage;
