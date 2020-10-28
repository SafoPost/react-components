class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="header">
            <a href="#"><div className="header-logo"></div></a>
            <a href="tel:888" className="header-phone"></a>
            <div className="header-phonelink">
              <a href="tel:7(962)556-1234">+7(962)556-1234</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="main">
            <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
            <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более.
            </div>
            <button className="btn main-btn"><span>Подробнее</span></button>
          </div>
        </div>
      </main>
    );
  }
}

const FeaturesSliderItem = props => {
  return (
    <div className="features-slider_item">
      <div className="features-img" style={props.style}></div>
      <div className="features-feature">{props.name}</div>
    </div>
  )
}

class FeaturesSlider extends React.Component {
  render() {
    return (
      <div className="features-slider">
        <div className="features-slider_items">
          <FeaturesSliderItem name="Первое целевое преимущество" style={{ backgroundImage: `url(./images/1.svg)` }} />
          <FeaturesSliderItem name="Второе целевое преимущество" style={{ backgroundImage: `url(./images/2.svg)` }} />
          <FeaturesSliderItem name="Третье целевое преимущество" style={{ backgroundImage: `url(./images/3.svg)` }} />
          <FeaturesSliderItem name="Четвертое целевое преимущество" style={{ backgroundImage: `url(./images/4.svg)` }} />
        </div>
        <button className="features-slider-arrow features-slider-prev">
          <svg width="9" height="16"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
            </path>
          </svg>
        </button>
        <button className="features-slider-arrow features-slider-next">
          <svg width="9"
            height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
            </path>
          </svg>
        </button>
      </div>
    );
  }
}

class SectionFeatures extends React.Component {
  render() {
    return (
      <section className="features">
        <div className="wrapper">
          <div className="features-wrapper">
            <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
            <div className="features-subhead">О нас</div>
            <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.
            </div>
            <FeaturesSlider />
          </div>
        </div>
      </section>
    );
  }
}

class SectionContact extends React.Component {
  render() {
    return (
      <section className="contact">
        <div className="wrapper">
          <div className="contact-wrapper">
            <h2 className="contact-title">Остались вопросы?</h2>
            <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
            <form action="../mailer.smart.php" className="contact-form">
              <input type="text" placeholder="Ваше имя" />
              <input type="tel" placeholder="Телефон" />
              <input type="email" placeholder="E-mail" />
              <button className="btn contact-btn">
                <span>Позвоните мне</span>
              </button>
            </form>
            <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-logo"></div>
        <div className="footer-company">
          <span>© 2020 XXXcompany. Все права защищены.</span>
        </div>
        <a href="tel:888"
          className="footer-phone"></a>
        <div className="footer-websurfer">
          <span className="footer-websurfer_build">Сделано</span>
          <a href="#">Ваше имя</a>
        </div>
        <div className="footer-phonelink">
          <a href="tel:888">+7(962)556-1234</a>
        </div>
      </div>
    );
  }
}

class GeneralContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <SectionFeatures />
        <SectionContact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <GeneralContainer />,
  document.getElementById('container')
);