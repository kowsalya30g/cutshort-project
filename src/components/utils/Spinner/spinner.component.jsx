import './spinner.styles.css';

//Reusable spinner component for loading
const Spinner = () => {
  return (
    <div className='SpinnerOverlay'>
      <div className='SpinnerContainer' />
    </div>
  );
};

export default Spinner;