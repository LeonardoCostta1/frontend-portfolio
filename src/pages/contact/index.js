import Button from "@/components/Button";
import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__left-container-container">
        <div className="headline_contact">
          Get your business powered with antic.
        </div>
        <div className="subheadline_contact">
          We need some basic information to get you to the right place.
        </div>

        <form>
          <label>name</label>
          <input type="text"></input>

          <label>bussines</label>
          <input type="text"></input>

          <label>website</label>
          <input type="text"></input>

          <textarea
            id="message"
            name="message"
            maxlength="5000"
            data-name="field"
            placeholder=""
            required=""
            class="input is--textarea w-input"
          ></textarea>

          <Button text="send a message" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
