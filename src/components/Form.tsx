import "./Form.scss";

interface FormProps {
  subject?: string;
}

export const Form = ({ subject }: FormProps) => {
  return (
    <div className="form-wrapper">
      <form action="https://formsubmit.co/a.stuborn@gmail.com" method="POST">
        <input
          type="hidden"
          name="_subject"
          value="Nytt mail från Josefin konst!"
          className="input-fields"
        />

        <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/thanks"
          className="input-fields"
        />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="text"
          name="subject"
          placeholder="Ämne"
          defaultValue={subject}
          required
        ></input>
        <textarea
          name="message"
          cols={40}
          rows={5}
          placeholder="Skriv ditt meddelande här"
        />

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};
