import { useEffect, useState } from "react";
import "./SimpleTimer.css";

const SimpleTimer = () => {
    const [date, setDate] = useState(new Date());

    useEffect(()=> {
        const interval = setInterval(() => {
            // console.log("Interval running");
            setDate(new Date());
        }, 1000);

        // We need to clear the interval to prevent memory leaks and unintended behavior. If we don't clear the interval, it will continue to run even after the component is unmounted, which can lead to performance issues and bugs in the application. Clearing the interval ensures that it stops running when the component is no longer in use.
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="simple-timer-bg">
            <div>
                <div className="simple-timer-label">Timer</div>
                <div className="simple-timer-count">{date.toLocaleTimeString()}</div>
            </div>
        </div>
    )
}

export default SimpleTimer;