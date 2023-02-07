function Main(props) {
    return (
      <>
  <section id="heroSection" className="heroSection"></section>
  <main id="main" className="main">
    <div className="container">
      {/* container class will hold in the main sections in order using grid. */}
      {/* aside section */}
      <aside>
        <h2>About Me</h2>
      </aside>
      {/* about me */}
      <section className="content" id="about">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          voluptatum eligendi minus provident voluptas ratione, quo esse unde
          expedita harum dolore. Unde architecto itaque quisquam autem, facere
          rerum ipsa! Quo! Nam quaerat sequi reprehenderit itaque numquam unde
          ut veniam sed repudiandae facere! Libero consectetur maxime qui alias
          dolorum ad amet ducimus expedita id vitae nobis illum modi quisquam,
          explicabo consequuntur. Aliquid molestias voluptatibus, dolorum quod
          aut, quia repudiandae eos a nobis blanditiis soluta rerum aliquam
          quaerat aperiam, illo itaque? Itaque vero nobis rem dignissimos hic
          reprehenderit cumque libero ab veritatis. Ipsum, blanditiis aperiam id
          placeat accusantium exercitationem architecto in aliquam consequuntur
          quasi, a ut, voluptatem dolores omnis expedita perferendis. Ipsam
          architecto amet iusto pariatur libero in distinctio laudantium omnis.
          Perspiciatis. Facere id dolorem, tempore nobis animi possimus
          repellendus, commodi beatae, tempora inventore consequuntur! Itaque,
          voluptatum a sed quibusdam repudiandae, ipsa eaque natus tempora,
          eveniet dolores error ullam molestiae ipsum eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          voluptatum eligendi minus provident voluptas ratione, quo esse unde
          expedita harum dolore. Unde architecto itaque quisquam autem, facere
          rerum ipsa! Quo! Nam quaerat sequi reprehenderit itaque numquam unde
          ut veniam sed repudiandae facere! Libero consectetur maxime qui alias
          dolorum ad amet ducimus expedita id vitae nobis illum modi quisquam,
          explicabo consequuntur. Aliquid molestias voluptatibus, dolorum quod
          aut, quia repudiandae eos a nobis blanditiis soluta rerum aliquam
          quaerat aperiam, illo itaque? Itaque vero nobis rem dignissimos hic
          reprehenderit cumque libero ab veritatis. Ipsum, blanditiis aperiam id
          placeat accusantium exercitationem architecto in aliquam consequuntur
          quasi, a ut, voluptatem dolores omnis expedita perferendis. Ipsam
          architecto amet iusto pariatur libero in distinctio laudantium omnis.
          Perspiciatis. Facere id dolorem, tempore nobis animi possimus
          repellendus, commodi beatae, tempora inventore consequuntur! Itaque,
          voluptatum a sed quibusdam repudiandae, ipsa eaque natus tempora,
          eveniet dolores error ullam molestiae ipsum eius. <br />
          <a href="#">Back to TOP</a>
        </p>
      </section>
    </div>
    <div id="container2" className="container">
      {/* aside section */}
      <aside>
        <h2>Projects</h2>
      </aside>
      {/* Project */}
      <section className="content" id="work">
        <h3>Projects</h3>
        <a href="#">Back to TOP</a>
        <div className="projects">
          {/* Each div below will become links to project github pages once clicked */}
          <a
            href="https://github.com/onderguler35/Refactoring-Code-Semantic"
            target="_blank"
          >
            <div id="project1" className="project">
              <h3>Refactoring Accesibility</h3>
            </div>
          </a>
          <a
            href="https://github.com/onderguler35/Console-Finances"
            target="_blank"
          >
            <div id="project2" className="project">
              <h3>Console Finances</h3>
            </div>
          </a>
          <a
            id="project3"
            className="project"
            href="https://github.com/onderguler35/city-wonderer"
            target="_blank"
          >
            <div>
              <h3>City Wonderer</h3>
            </div>
          </a>
          <a href="https://github.com/onderguler35/Weather-app" target="_blank">
            <div id="project4" className="project">
              <h3>Weather Dashboard</h3>
            </div>
          </a>
          <a
            href="https://github.com/onderguler35/Work-Day-Scheduler-Challange"
            target="_blank"
          >
            <div id="project5" className="project">
              <h3>Work Day Scheduler</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
    <div id="container3" className="container">
      {/* aside section */}
      <aside>
        <h2>Contact Me</h2>
      </aside>
      {/* Contact Me */}
      <section className="content" id="contact">
        <h3>Contact Me</h3>
        <a href="#">Back to TOP</a>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          voluptatum eligendi minus provident voluptas ratione, quo esse unde
          expedita harum dolore. Unde architecto itaque quisquam autem, facere
          rerum ipsa! Quo! Nam quaerat sequi reprehenderit itaque numquam unde
          ut veniam sed repudiandae facere! Libero consectetur maxime qui alias
          dolorum ad amet ducimus expedita id vitae nobis illum modi quisquam,
          explicabo consequuntur. Aliquid molestias voluptatibus, dolorum quod
          aut, quia repudiandae eos a nobis blanditiis soluta rerum aliquam
          quaerat aperiam, illo itaque? Itaque vero nobis rem dignissimos hic
          reprehenderit cumque libero ab veritatis. Ipsum, blanditiis aperiam id
          placeat accusantium exercitationem architecto in aliquam consequuntur
          quasi, a ut, voluptatem dolores omnis expedita perferendis. Ipsam
          architecto amet iusto pariatur libero in distinctio laudantium omnis.
          Perspiciatis. Facere id dolorem, tempore nobis animi possimus
          repellendus, commodi beatae, tempora inventore consequuntur! Itaque,
          voluptatum a sed quibusdam repudiandae, ipsa eaque natus tempora,
          eveniet dolores error ullam molestiae ipsum eius.
        </p>
      </section>
    </div>
  </main>
</>

    );
  }
  
  export default Main;