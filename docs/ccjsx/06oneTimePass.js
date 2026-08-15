const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef();

  function handleClick() {
    const passcode = Math.floor(100000 + Math.random() * 900000);
    setOtp(passcode);
    setTime(5);
    setIsActive(true);
  }

  useEffect(() => {
    if (!isActive) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">{otp ? otp : "Click 'Generate OTP' to get a code"}</h2>

      <p id="otp-timer" aria-live="polite">
        {time > 0
          ? `Expires in: ${time} seconds`
          : otp
            ? "OTP expired. Click the button to generate a new OTP."
            : ""}
      </p>

      <button id="generate-otp-button" onClick={handleClick} disabled={time > 0}>
        Generate OTP
      </button>
    </div>
  );
};
