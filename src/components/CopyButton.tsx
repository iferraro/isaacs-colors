interface CopyButtonProps {
  colorValue: string;
}

const CopyButton = ({ colorValue }: CopyButtonProps) => {
  const handleClick = () => {
    navigator.clipboard.writeText(colorValue);
  };

  return (
    <button type="button" className="mx-2" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 fill-white opacity-60 in-expo duration-150 hover:scale-125 hover:opacity-100"
        viewBox="0 0 20 20"
      >
        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
        <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    </button>
  );
};

export default CopyButton;
