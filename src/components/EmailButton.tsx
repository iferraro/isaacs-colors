const EmailButton = () => {
  return (
    <button type="button" className="mx-2">
      <a href="mailto:ieferraro@outlook.com">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] fill-white in-expo duration-150 hover:scale-125"
          viewBox="0 2 20 15.5"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </a>
    </button>
  );
};

export default EmailButton;
