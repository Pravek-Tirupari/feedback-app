import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          This is a react app to leave feedback to a product or a service developed by the
          create-react-app
        </p>
        <p>Version 1.0.0</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
