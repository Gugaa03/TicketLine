"use client";
import {
  faAddressCard,
  faCalendarAlt,
  faCity,
  faCreditCard,
  faEnvelope,
  faInbox,
  faLock,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HttpUtilities from "@/app/Utilities/httputilities";
import EventsAPI from "eventsAPI";
import { useEffect, useState } from "react";
import "./Checkout.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CheckOut = (props) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const checkoutprop = props.props;
  const [email, setEmail] = useState(""); // Added state for email
  const router = useRouter();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const _eventsAPI = new EventsAPI(null, "https://localhost:7008");
        const response = await _eventsAPI.getEvents();
        setSelectedEvent(response.data[0]); // Selecting the first event by default
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedEvent) return; // No event selected

    const formData = new FormData(event.target);

    const billingAddress = {
      fullName: formData.get("firstname"),
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      zip: formData.get("zip"),
    };

    const paymentDetails = {
      cardName: formData.get("cardname"),
      cardNumber: formData.get("cardnumber"),
      expMonth: formData.get("expmonth"),
      expYear: formData.get("expyear"),
      cvv: formData.get("cvv"),
    };

    const orderDetails = {
      billingAddress,
      paymentDetails,
      event: selectedEvent, // Use selectedEvent instead of events
    };

    console.log("Order details:", orderDetails);

    try {
      const _eventsAPI = new EventsAPI(null, "https://localhost:7008");
      const response = await _eventsAPI.submitOrder(orderDetails);
      console.log("Order submitted successfully:", response);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Failed to submit order:", error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const total = selectedEvent ? selectedEvent.price.toFixed(2) : 0; // Compute total
  const handleBuy = async (e) => {
    e.preventDefault();

    const eventId = Number(checkoutprop);

    try {
      const response = await HttpUtilities.post(
        "https://localhost:7008/api/Ticket/Buy",
        { eventId, UserEmail: email }
      );

      console.log("Buy response:", response);

      router.push("/"); // Redirect to the landing page if already logged in
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.log(error);
    }
  };

  return (
    <div className="screen">
      <div className="wrapper-checkout">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">
                      <FontAwesomeIcon icon={faUser} /> Nome Completo
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Gustavo Sousa Silva"
                      required
                    />
                    <label htmlFor="email">
                      <FontAwesomeIcon icon={faEnvelope} /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Gustavo@example.com"
                      value={email} // Bind input value to state
                      onChange={(e) => setEmail(e.target.value)} // Update state on change
                      required
                    />
                    <label htmlFor="adr">
                      <FontAwesomeIcon icon={faAddressCard} /> Morada
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="Rua Dona Glória de Castro"
                      required
                    />
                    <label htmlFor="city">
                      <FontAwesomeIcon icon={faCity} /> Cidade
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Porto"
                      required
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> País
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="Portugal"
                          required
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">
                          <FontAwesomeIcon icon={faInbox} /> Código Postal
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="4400-655"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>

                    <div className="icon-container">
                      <h4 htmlFor="fname">Accepted Cards</h4>
                      <div className="icon-container__icon">
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ color: "navy" }}
                        />
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ color: "blue" }}
                        />
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ color: "red" }}
                        />
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          style={{ color: "orange" }}
                        />
                      </div>
                    </div>
                    <label htmlFor="cname">
                      <FontAwesomeIcon icon={faUser} /> Nome do Cartão de
                      Crédito
                    </label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                      required
                    />
                    <label htmlFor="ccnum">
                      <FontAwesomeIcon icon={faCreditCard} />
                      Número do Cartão de Crédito
                    </label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                      required
                    />
                    <label htmlFor="expmonth">
                      <FontAwesomeIcon icon={faCalendarAlt} /> Mês De Expiração
                    </label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                      required
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">
                          <FontAwesomeIcon icon={faCalendarAlt} /> Ano de
                          Expiração
                        </label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                          required
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">
                          <FontAwesomeIcon icon={faLock} /> CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <label>
                  <input type="checkbox" defaultChecked name="sameadr" />
                  Shipping address same as billing
                </label>

                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                  onClick={handleBuy}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
