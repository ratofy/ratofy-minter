import { useMoralis } from "react-moralis";
import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";

export default function Home() {
  // checks if user is logged in with metamask
    const {
      isAuthenticated
    } = useMoralis()

    if(!isAuthenticated){
      return(
        <AuthPage />
      )
    }
  return (
    <div>
      <UploadForm />
    </div>
  )
}
