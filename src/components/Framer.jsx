import { motion, useDragControls } from "framer-motion";

export default function SwipeDown({ children, className, handle, onDismiss }) {
  const dragControls = useDragControls();

  function handleDragEnd(event, info) {
    if (info.offset.y > 120 || info.velocity.y > 700) {
      onDismiss();
    }
  }

  return (
    <motion.div
      drag="y"
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 0, bottom: 0.75 }}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      className={className}
    >
      <div
        className="touch-none cursor-grab active:cursor-grabbing"
        onPointerDown={(event) => dragControls.start(event)}
      >
        {handle}
      </div>
      {children}
    </motion.div>
  );
}
