import PropTypes from 'prop-types';

const Title = ({ children }) => {
//   console.log(children);
  return (
    <div className="relative  mx-auto  my-10 border-s-8 border-blue-600 ps-10" >
      <h2 className={`text-2xl md:text-5xl font-bold py-5 text-blue-600`}>{children}</h2>
      <h2
        className={`text-4xl md:text-7xl text-blue-500 font-bold opacity-10 bottom-0 py-8 absolute -z-10`}
      >
        {children}
      </h2>
    </div>
  );
};
Title.propTypes={
    children:PropTypes.string
}
export default Title;