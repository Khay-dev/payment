import { Header } from "@/components/Header";
import { Transactions} from "@/components/Transactions";

const Dashboard = () => {
    return (
        <>
            <Header currentPage="dashboard" />
            this is the dashboard.

            <Transactions/>
        </>
    );
};

export default Dashboard;
