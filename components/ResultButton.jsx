const ResultButton = (props) => {
    const handleClick = () => {
        props.verifyAnswer();
    };

    return (
        <button
            className="px-3 py-2 border border-black mr-4 last:mr-0 rounded text-4xl hover:bg-gray-100"
            onClick={handleClick}
        >
            {props.num}
        </button>
    );
};

export default ResultButton;
