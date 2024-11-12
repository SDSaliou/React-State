import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Sokhna Diarra Saliou",
        bio: "une passionnée en developpement web",
        imgSrc: "/IMG_9187.jpeg",
        profession: "Software Engineer"
      },
      show: false,
      mountedTime: 0
    };
  }

  // Méthode pour démarrer le timer lorsqu’on monte le composant
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({ mountedTime: prevState.mountedTime + 1 }));
    }, 1000);
  }

  // Méthode pour arrêter le timer lorsqu’on démonte le composant
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Méthode pour basculer l'état "montre"
  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { Person, show, mountedTime } = this.state;
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div className="profile-card">
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <img src={Person.imgSrc} alt="Profile" width="150" />
            <h4>{Person.profession}</h4>
          </div>
        )}
        <h5>Time since mounted: {mountedTime} seconds</h5>
      </div>
    );
  }
}

export default App;
