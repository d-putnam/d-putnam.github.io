import './About.css'

function About() {

  return (
    <div className="About">
      <img alt="me" class="about-pic" src={`${process.env.PUBLIC_URL}/img/me.jpg`} />
      <p>
        I'm a programmer and media artist living in Providence, Rhode Island!
      </p>
      <p>
        I have a deep interest in building creative tools that use randomness and indeterminacy in generating sound and image.
      </p>
      <p>
        I graduated from Brown University in 2015, where I studied creative coding in the Computer Music and Multimedia program.
      </p>
      <p>
        I'm always open to collaborate, so feel free to reach out!
      </p>
      <a href="mailto:dan@dputnam.net" 
         className="inline-link">
        // dan@dputnam.net
      </a>
    </div>
  );
}

export default About;
