import PropTypes from 'prop-types';
import Button from "~/components/Button";

function MenuItem({ data, onClick }) {
  return (
    <Button menuitem icon={data.icon} to={data.to} onClick ={onClick} >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data : PropTypes.object.isRequired,
  onClick : PropTypes.func,
};

export default MenuItem;
