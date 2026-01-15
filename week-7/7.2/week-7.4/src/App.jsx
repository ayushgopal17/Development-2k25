
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, networkAtom,notificationsAtom,messagingAtom, totalNotificationSelector } from './atoms'

function App(){
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {
  const networkNotificationCount=useRecoilValue(networkAtom)
  const Jobsatomcount=useRecoilValue(jobsAtom)
  const notificationsAtomCount=useRecoilValue(notificationsAtom)
  const MessagingAtomcount =useRecoilValue(messagingAtom)
  const totalMessageCount=useRecoilValue(totalNotificationSelector)

  return (
    <>
     <button>Home</button>

     <button>My network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
     <button>Jobs ({Jobsatomcount })</button>
     <button>Messaging ({MessagingAtomcount})</button>
     <button>Notifications ({notificationsAtomCount})</button>

    <button>Me({totalMessageCount})</button>
        
    </>
  )
}

export default App
