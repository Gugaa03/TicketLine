import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import Privacy from "../Components/Privacy/Privacy";
import Link from "next/link";
import Image from "next/image";
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
      <Privacy />
    </>
  );
}
