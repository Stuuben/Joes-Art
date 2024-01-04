import "./AboutMe.scss";

export const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="about-main">
        <h2>Om mig</h2>
        <div className="about-inner">
          <h3>Josefin Stuborn</h3>
          <img src="/assets/josefin-profile.jpg" alt="josefin" />

          <p>
            Hej! Mitt namn är Josefin Stuborn och på den här hemsidan kommer ni
            hitta min konst av olika slag. Jag är 33 år, har en partner, en son
            och en katt.
          </p>
          <p>
            Jag är en person som mår väldigt bra av att göra praktiska och
            kreativa saker. Att få vara kreativ är det bästa jag vet. Måla,
            pyssla, bygga, skulptera, inreda och många fler områden trivs jag i.
          </p>
          <p>
            Jag har gått en förberedande konstskola i Stockholm och haft några
            utställningar de senaste 7 åren. På den här sidan kommer ni hitta
            kreativa ting på olika områden. Men framförallt kommer det dyka upp
            målningar. De flesta kommer vara i akvarell eller akryl.
          </p>
          <p>
            Hoppas att er vistelse här blir/har varit inspirerande och att ni
            vill titta förbi igen någon gång!
          </p>
        </div>
      </div>
    </div>
  );
};
