"use client";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import CheckOut from "../../Components/CheckOut/CheckOut";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <div className="header--center">
        <div className="logo-container">
          <Link href="/">
            <Image src="/LogoProjeto.png" alt="Logo" width={200} height={100} />
          </Link>
        </div>
      </div>
      <CheckOut props={id} />
    </>
  );
}
