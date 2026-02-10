import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState<string>();
  const interVal = useRef<null | number>(null);

  useEffect(() => {
    (() =>
      setTime(
        new Date().toLocaleTimeString("fa-IR", {
          hour12: false,
        })
      ))();
    interVal.current = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString("fa-IR", {
            hour12: false,
          })
        ),
      1000
    );
    return () => {
      if (interVal.current) {
        clearInterval(interVal.current);
        interVal.current = null;
      }
    };
  }, []);
  return (
    <span dir="ltr" className=" w-17 text-start">
      {time}
    </span>
  );
}
