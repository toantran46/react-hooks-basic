import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { computeHeadingLevel } from '@testing-library/react';

Clock.propTypes = {

};

function formatDate(date) {
    if (!date) return 'not valid'

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const valueInterval = setInterval(() => {
            const now = new Date();

            const newTimeString = formatDate(now);

            setTimeString(newTimeString);
        }, 1000);
        return () => {
            console.log('clean up');
            clearInterval(valueInterval);
        }
    }, []);
    return (

        <p style={{ fontSize: '30px' }}>{timeString} </p>

    );
}

export default Clock;