/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
  return (
    <input
      style={{
        width: '100%',
        height: '100%',
        border: '1px solid #ccc',
        outline: 'none',
        padding: '0.4rem',
        borderRadius: '5px',
        color: 'black',
        '&:hover': {
          border: '1px solid #3182CE'
        }
      }}
      {...props}
    />
  );
};
