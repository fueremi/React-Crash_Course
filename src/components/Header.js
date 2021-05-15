import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add Task'}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// ! CSS In Js
// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
