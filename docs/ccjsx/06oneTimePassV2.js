const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [passcode, setPasscode] = useState("");
	const [count, setCount] = useState(null);
	const [hasGenerated, setHasGenerated] = useState(false);
	const [btnState, setBtnState] = useState(false);
	const intervalRef = useRef(null)
	
	function handleClick() {
		
		if (intervalRef.current) {
			clearInterval(intervalRef.current)}
			
		const otp = Math.floor(100000 + Math.random() * 900000);
    setPasscode(otp);
    setCount(5);
		setBtnState(true);
		setHasGenerated(true);
	
	  intervalRef.current = 
		setInterval(() => {
	    setCount(prev => {
				if (prev === 0) {
					clearInterval(intervalRef.current)
					setBtnState(false);
					return null;
				}
			return prev-1; 
		});
	}, 1000);
}
	
	useEffect(() => {
		return()=>{
			if (intervalRef.current) {
			clearInterval(intervalRef.current)}
		}
	}, [])
	
	
	return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {passcode ? passcode : "Click 'Generate OTP' to get a code"}
      </h2>
	
			<p id="otp-timer" aria-live="assertive">
			  {!hasGenerated
			    ? ""
			    : count !== null
			      ? `Expires in: ${count} seconds`
			      : "OTP expired. Click the button to generate a new OTP."
			  }
			</p>
			
      <button
        id="generate-otp-button"
        onClick={handleClick}
        disabled={btnState}
      >
        Generate OTP
      </button>
    </div>
  );
};