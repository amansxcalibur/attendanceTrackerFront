import React, { useImperativeHandle, forwardRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SlideInNotifications = forwardRef((props, ref) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotif = useCallback((id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  }, []);

  const addNotif = (id, text) => {
    setNotifications((pv) => [{ id, text }, ...pv]);
  };

  useImperativeHandle(ref, () => ({
    addNotif,
  }));

  return (
    <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => (
          <Notification removeNotif={removeNotif} {...n} key={n.id} />
        ))}
      </AnimatePresence>
    </div>
  );
});

SlideInNotifications.displayName = "SlideInNotifications"
const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto">
        &times;
      </button>
    </motion.div>
  );
};

export default SlideInNotifications;
