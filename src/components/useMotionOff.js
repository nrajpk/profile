import { useEffect, useState } from "react";

// True when the visitor has paused animations, or prefers reduced motion
// and has not chosen otherwise. Follows the site's motion switch live.
export default function useMotionOff() {
  const [off, setOff] = useState(false);

  useEffect(() => {
    const read = () => setOff(document.documentElement.classList.contains("motion-off"));
    read();
    document.addEventListener("motionchange", read);
    return () => document.removeEventListener("motionchange", read);
  }, []);

  return off;
}
