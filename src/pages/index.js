import ConcertCard from "../components/cards";
import AuthLayout from "../templates/AuthLayout";

const Home = () => (
    <AuthLayout>
       <h1 className="font-gilroyBold text-lg">All concerts</h1>
       <div className="mt-4">
        <ConcertCard />
       </div>
    </AuthLayout>
);

export default Home;