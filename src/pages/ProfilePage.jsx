import Header from '../components/Header';
import Profile from '../components/Profile';
import useLocalStorage from "../hooks/useLocalStorage";


export default function ProfilePage() {
  const [user] = useLocalStorage("user");

  return (
    <div className="h-screen bg-miingo-gray overflow-hidden">
      {/* Header */}
      <Header />
      <main className="">
        <Profile user={user} />
      </main>
    </div>
  );
}
