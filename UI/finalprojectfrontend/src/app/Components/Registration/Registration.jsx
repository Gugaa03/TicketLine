"use client";
import {
   faBuilding,
   faEnvelope,
   faGlobe,
   faInfoCircle,
   faPhone,
   faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EventsAPI } from "eventsAPI";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./Registration.css";

export default function RegistrationForm() {
   const [formData, setFormData] = useState({
      responsibleName: "",
      companyName: "",
      phoneNumber: "",
      companyDescription: "",
      website: "",
      email: "",
   });
   const [warning, setWarning] = useState("");
   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

   const router = useRouter(); // Initialize the router hook within the component

   useEffect(() => {
      validateForm();
   }, [formData]);

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const validateForm = () => {
      const {
         responsibleName,
         companyName,
         phoneNumber,
         companyDescription,
         website,
         email,
      } = formData;

      const isFormValid =
         responsibleName.trim() !== "" &&
         companyName.trim() !== "" &&
         phoneNumber.trim() !== "" &&
         companyDescription.trim() !== "" &&
         website.trim() !== "" &&
         email.trim() !== "";

      setIsSubmitDisabled(!isFormValid);
      setWarning(isFormValid ? "" : "Please fill in all the fields correctly.");
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      const _eventsAPI = new EventsAPI(null, "https://localhost:7008");

      try {
         const res = await _eventsAPI.apiAuthRegister.post({
            body: {
               userName: formData.companyName,
               password: "Dummy_password123_",
               email: formData.email,
            },
         });

         if (res?.body?.code === 200) {
            console.log("Logged In");
            document.cookie =
               "formData.companyName=" + encodeURIComponent(username) + ";";
            document.cookie = "role=admin;";
            router.push("/");
         } else {
            setWarning("Registration failed. Please try again.");
            console.log(error);
         }
      } catch (error) {
         setWarning("Error During login\n");
         console.log(error);
      }
   };

   return (
      <div className="screen">
         <div className="wrapper">
            <form onSubmit={handleSubmit}>
               {[
                  {
                     field: "responsibleName",
                     placeholder: "Nome do Responsável",
                     icon: faUser,
                  },
                  {
                     field: "companyName",
                     placeholder: "Nome da Empresa",
                     icon: faBuilding,
                  },
                  {
                     field: "phoneNumber",
                     placeholder: "Nº Telemóvel",
                     icon: faPhone,
                  },
                  {
                     field: "companyDescription",
                     placeholder: "Descrição da Empresa",
                     icon: faInfoCircle,
                  },
                  { field: "website", placeholder: "Website", icon: faGlobe },
                  { field: "email", placeholder: "Email", icon: faEnvelope },
               ].map((item, idx) => (
                  <div key={idx} className="input-box">
                     <FontAwesomeIcon icon={item.icon} className="input-icon" />
                     <input
                        type="text"
                        name={item.field}
                        placeholder={item.placeholder}
                        value={formData[item.field]}
                        onChange={handleInputChange}
                     />
                  </div>
               ))}
               {warning && <span className="warning">{warning}</span>}
               <br />
               <button type="submit" disabled={isSubmitDisabled}>
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
}
