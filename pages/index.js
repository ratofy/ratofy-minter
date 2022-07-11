import { useMoralis } from "react-moralis";
import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";

export default function Home() {
  // checks if user is logged in with metamask, logs out a user using props in the uploadform 
    const {
      isAuthenticated,
      authenticate,
      logout
    } = useMoralis()

    // logs in user to metamask
    const metaAuth = async () => {
      try{
        await authenticate({
          signingMessage: "Login to start minting"
        })

      } catch(error){
        console.log(error)

      }
    }

    if(!isAuthenticated){
      return(
        <AuthPage metaAuth={metaAuth} />
      )
    }
  return (
    <div>
      <UploadForm logout={logout} />
    </div>
  )
}
