import { useEffect, useState } from 'react';
import '../css/clockComponent.css';

function Clock() {
    // Establecer el momento inicial cuando el componente se monta
    const [startTime] = useState(new Date()); 
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date();
            const elapsed = now.getTime() - startTime.getTime(); // Diferencia en milisegundos
            setElapsedTime(elapsed); // Actualizar el estado con el tiempo transcurrido
        }, 1000);

        return () => {
            clearInterval(timerId); // Limpia el intervalo cuando el componente se desmonta
        };
    }, [startTime]);

    // Calcular minutos y segundos transcurridos
    const elapsedSeconds = Math.floor((elapsedTime / 1000) % 60);
    const elapsedMinutes = Math.floor((elapsedTime / 1000) / 60);

    return (
        <div className="clock">
            <p className="time">
                Time Elapsed
            </p>
            <p className="minutes">
                {elapsedMinutes} minute(s)
            </p>
            <p className="seconds">
                {elapsedSeconds} second(s)
            </p>
        </div>
    );
}

export default Clock;
