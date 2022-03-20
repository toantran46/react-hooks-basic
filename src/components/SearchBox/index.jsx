import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

SearchBox.propTypes = {
    onSubmit: PropTypes.func,
};

SearchBox.defaultProps = {
    onSubmit: null,
}


function SearchBox(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchBoxChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 300);

    }



    return (
        <form >
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchBoxChange}
            />
        </form>
    );
}

export default SearchBox;