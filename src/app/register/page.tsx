import SignUp from "../component/register";
import Navbar from "../navigation/navbar";
export default function Page() {
    return (
        <div>
            <div className="w-full pr-12 overflow-hidden fixed top-0">
                <Navbar />
            </div>
            <SignUp />
        </div>
    )
}