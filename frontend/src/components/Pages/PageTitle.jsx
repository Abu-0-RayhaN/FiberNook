import { useSelector } from "react-redux";
import Helmet from "react-helmet";

function Title() {
  const title = useSelector((state) => state.title.title);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default Title;
