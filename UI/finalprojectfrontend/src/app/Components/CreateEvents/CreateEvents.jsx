"use client";
import {
  faAlignLeft,
  faCalendarAlt,
  faCamera,
  faEuroSign,
  faList,
  faMapMarkerAlt,
  faTag,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateEvents.css";
import { EventsAPI } from "eventsAPI";
import HttpUtilities from "@/app/Utilities/httputilities";
export default function CreateEventsForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Type: "",
    Capacity: "",
    Photo: "",
    Location: "",
    Date: "",
    Price: "€",
  });

  const router = useRouter(); // Initialize useRouter

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;
    if (name === "Price") {
      // Remove non-numeric characters and ensure the € is always at the end
      const newValue = value.replace(/[^0-9]/g, "") + "€";
      setFormData({ ...formData, [name]: newValue });
    } else if (type === "checkbox") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData({ ...formData, [name]: selectedOptions });
    } else if (type === "radio" && checked) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.Name &&
      formData.Description &&
      formData.Type &&
      formData.Capacity &&
      formData.Photo &&
      formData.Location &&
      formData.Date &&
      formData.Price
    ) {
      console.log("Form Data:", formData);
      try {
        const _eventsAPI = new EventsAPI(null, "https://localhost:7008");

        const _startDate = new Date(formData.Date);
        const _createdOn = new Date();
        const _endDate = new Date(_startDate);
        _endDate.setDate(_endDate.getDate() + 7);

        const _cap = new Number(formData.Capacity);
        const _price = parseFloat(formData.Price.replace("€", "").trim());

        // const _response = await _eventsAPI.apiEvent.post({
        const _response = await await HttpUtilities.post(
          "https://localhost:7008/api/Event",
          {
            name: formData.Name,
            description: formData.Description,
            type: formData.Type,
            startDate: _startDate,
            endDate: _endDate,
            capacity: Number(_cap),
            createdBy: "System",
            createdOn: _createdOn,
            photo: formData.Photo,
            price: Number(_price),
            location: formData.Location,
          }
        );

        router.push("/");
      } catch (error) {
        console.error("Error :", error);
      }
    } else {
      alert("Please fill in all fields");
    }
  };
  const portugueseDistricts = [
    "Aveiro",
    "Beja",
    "Braga",
    "Bragança",
    "Castelo Branco",
    "Coimbra",
    "Évora",
    "Faro",
    "Guarda",
    "Leiria",
    "Lisboa",
    "Portalegre",
    "Porto",
    "Santarém",
    "Setúbal",
    "Viana do Castelo",
    "Vila Real",
    "Viseu",
  ];

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      setFormData({ ...formData, Photo: base64 });
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="screen">
      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="Name" className="label">
            Nome do Evento:
          </label>
          <div className="input-box">
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faTag} className="icon" />
          </div>
          <label htmlFor="Description" className="label">
            Descrição do Evento:
          </label>
          <div className="input-box">
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faAlignLeft} className="icon" />
          </div>
          <label htmlFor="Type" className="label">
            Tipo:
          </label>
          <div className="input-box">
            <input
              type="text"
              id="Type"
              name="Type"
              value={formData.Type}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faList} className="icon" />
          </div>
          <label htmlFor="Capacity" className="label">
            Lotação:
          </label>
          <div className="input-box">
            <input
              type="number"
              id="Capacity"
              name="Capacity"
              value={formData.Capacity}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faUsers} className="icon" />
          </div>
          <label htmlFor="Photo" className="label">
            Fotografia:
          </label>
          <div className="input-box">
            <input
              type="file"
              id="Photo"
              name="Photo"
              accept="image/*"
              onChange={handleImageChange}
            />
            <FontAwesomeIcon icon={faCamera} className="icon" />
          </div>
          <label htmlFor="Location" className="label">
            Cidade:
          </label>
          <div className="input-box">
            <select
              type="text"
              id="Location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
            >
              <option value="">Select a district</option>
              {portugueseDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          </div>
          <label htmlFor="Date" className="label">
            Data:
          </label>
          <div className="input-box">
            <input
              type="date"
              id="Date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]} // Definindo o mínimo como a data atual
            />
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          </div>
          <label htmlFor="Price" className="label">
            Preço em €:
          </label>
          <div className="input-box">
            <input
              type="text"
              id="Price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faEuroSign} className="icon" />
          </div>
          <button type="submit" className="submit-button">
            Entregar para Aprovação
          </button>
        </form>
      </div>
    </div>
  );
}
