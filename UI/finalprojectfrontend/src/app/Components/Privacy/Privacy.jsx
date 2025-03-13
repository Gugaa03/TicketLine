import React from "react";
import "./Privacy.css";
import Link from "next/link";

const Privacy = () => {
  return (
    <div className="privacy">
      <h2>Política de Privacidade</h2>
      <p>
        Esta Política de Privacidade explica as políticas da TicketSolution.com
        sobre a coleta e uso das informações que coletamos quando você acessa o
        TicketSolution.com (o “Serviço”). Esta Política de Privacidade descreve
        seus direitos de privacidade e como você está protegido sob as leis de
        privacidade. Ao usar nosso Serviço, você consente com a coleta e uso de
        suas informações de acordo com esta Política de Privacidade. Por favor,
        não acesse ou use nosso Serviço se você não consentir com a coleta e uso
        de suas informações conforme descrito nesta Política de Privacidade.
      </p>
      <p>
        Para mais informações sobre nossas práticas de privacidade, entre em
        contato conosco em{" "}
        <a href="mailto:infoticketsolutions@gmail.com">
          infoticketsolutions@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Privacy;
