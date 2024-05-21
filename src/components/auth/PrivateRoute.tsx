import useUser from '@/hooks/useUser'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useUser()

  if (user == null) {
    return <Navigate to="/signin" replace={true} />
  }

  return <>{children}</>
}

export default PrivateRoute
