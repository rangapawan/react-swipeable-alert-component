import {
  transitions,
  positions,
  Provider as AlertMessageProvider
} from "react-alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { motion, useAnimationControls } from "framer-motion";

// Import Svgs
import Info from "../svgs/Info";
import Success from "../svgs/Success";
import Error from "../svgs/Error";

//Styles
import styles from "../styles/Alert.module.css";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  transition: transitions.FADE
};

const AlertTemplate = ({ style, options, message, close }) => {
  const controls = useAnimationControls();

  async function handleDragEnd(_, info) {
    const velocity = info.velocity.x;
    if (velocity > 180) {
      await controls.start({ x: "100%", transition: { duration: 0.2 } });
      close();
    } else {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }

  return (
    <motion.div
      drag="x"
      dragDirectionLock
      onDragEnd={handleDragEnd}
      dragElastic={0.7}
      dragConstraints={{ left: 0 }}
      animate={controls}
      style={style}
      className={styles["container"]}
    >
      {options.type === "info" && (
        <div className={styles["info-alert-container"]}>
          <div className={styles["info-icon"]}>
            <Info />
          </div>

          <div className={styles["message"]}>{message}</div>
          <div className={styles["closeButton"]}>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={close}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      )}
      {options.type === "success" && (
        <>
          <div className={styles["success-alert-container"]}>
            <div className={styles["success-icon"]}>
              <Success />
            </div>

            <div className={styles["message"]}>{message}</div>
            <div className={styles["closeButton"]}>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={close}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </>
      )}
      {options.type === "error" && (
        <div className={styles["error-alert-container"]}>
          <div className={styles["error-icon"]}>
            <Error />
          </div>

          <div className={styles["message"]}>{message}</div>
          <div className={styles["closeButton"]}>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={close}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export function AlertProvider({ children }) {
  return (
    <AlertMessageProvider template={AlertTemplate} {...options}>
      {children}
    </AlertMessageProvider>
  );
}
