
import Button from "~/components/Button";

function MenuItem({ data }) {
  return (
    <Button menuitem icon={data.icon}  >
      {data.title}
    </Button>
  );
}

export default MenuItem;
