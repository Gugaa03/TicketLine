import Image from "next/image";
import LoginPage from "../Components/CreateEvents/CreateEvents";
import CreateEventsForm from "../Components/CreateEvents/CreateEvents";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="header--center">
        <div className="logo-container">
          <Link href="/">
            <Image src="/LogoProjeto.png" alt="Logo" width={200} height={100} />
          </Link>
        </div>
      </div>
      <CreateEventsForm />
    </>
  );
}
