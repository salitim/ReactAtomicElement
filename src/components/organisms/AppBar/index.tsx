import React from 'react';

const style = {
  toolbar: {
    width: '100%',
    height: 50,
    background: 'blue',
  },
  lateralBar: {
    position: 'absolute',
    width: 150,
    height: '100%',
    background: '#ccc',
    transition: '0.3s all',
  },
};

const AppBar = ({ navigation, onClick }: any): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handlerIsOpen = React.useCallback(() => {
    setIsOpen(!isOpen);
    onClick();
  }, [isOpen, onClick]);
  return (
    <>
      <nav style={{ ...style.toolbar }}>
        {navigation.map((elem: string) => (
          <li key={elem} style={{ display: 'inline-block' }}>
            {elem}
          </li>
        ))}
        <button type="button" style={{ textAlign: 'right' }} onClick={handlerIsOpen}>
          Ouvrir
        </button>
      </nav>
      <div style={{ ...style.lateralBar, left: isOpen ? 0 : -150 }}>
        {navigation.map((elem: string) => (
          <li key={elem}>{elem}</li>
        ))}
      </div>
    </>
  );
};
export default AppBar;
