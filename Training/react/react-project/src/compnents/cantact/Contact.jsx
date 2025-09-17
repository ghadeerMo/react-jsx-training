import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a Message</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda at
          sapiente minus omnis ullam tempore, eos sequi odit enim velit natus
          quaerat nulla deserunt quos? Recusandae vel facilis reprehenderit
          veritatis!
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            Contact@email.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            +966 456 789 1234
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            address st. 1234
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number: </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />
          <label>Enter your Message here: </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter you message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
