
import Button from "~/components/Button";

function MenuItem({ data, onClick }) {
  return (
    <Button menuitem icon={data.icon} to={data.to} onClick ={onClick} >
      {data.title}
    </Button>
  );
}

export default MenuItem;
