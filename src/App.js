import './App.css';
import React from 'react'

const keybinds = {
  Q: "kick",
  W: "low-tom",
  E: "high-tom",
  A: "snare",
  S: "open-hi-hat",
  D: "closed-hi-hat",
  Z: "clav",
  X: "cowbell",
  C: "tambourine"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "testing"
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handlePress(event) {
    let key = event.key.toUpperCase();
    if (/[QWEASDZXC]/.test(key) == true) {
      document.getElementById(key).play();
      this.setState({
        text: keybinds[key]
      })
    } else {
      this.setState({
        text: "not a pad"
      })
    }
  }

  handleClick(button, text) {
    return () => {
      document.getElementById(button).play();
      this.setState({
        text: text,
      });
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handlePress);
  }

  componentDidUnmount() {
    document.removeEventListener("keydown", this.handlePress);
  }

  render () {
    return (
      <div id="drum-machine">
        <div id="display">
          {this.state.text}
        </div>
        <div id="button-wrapper">
          <button class="drum-pad" id="kick" onClick={this.handleClick("Q", "kick")}>Q
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/19[kb]78-BD1.wav.mp3" class="clip" id="Q"></audio>
          </button>
          <button class="drum-pad" id="low-tom" onClick={this.handleClick("W", "low-tom")}>W
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/23[kb]78-BLO3.wav.mp3" class="clip" id="W"></audio>
          </button>
          <button class="drum-pad" id="high-tom" onClick={this.handleClick("E", "high-tom")}>E
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/14[kb]78-BME1.wav.mp3" class="clip" id="E"></audio>
          </button>
          <button class="drum-pad" id="snare" onClick={this.handleClick("A", "snare")}>A
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/15[kb]78-SD3.wav.mp3" class="clip" id="A"></audio>
          </button>
          <button class="drum-pad" id="open-hi-hat" onClick={this.handleClick("S", "open-hi-hat")}>S
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/49[kb]78-HO1.wav.mp3" class="clip" id="S"></audio>
          </button>
          <button class="drum-pad" id="closed-hi-hat" onClick={this.handleClick("D", "closed-hi-hat")}>D
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/11[kb]78-HH3.wav.mp3" class="clip" id="D"></audio>
          </button>
          <button class="drum-pad" id="clav" onClick={this.handleClick("Z", "clav")}>Z
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/8[kb]78-CLA1.wav.mp3" class="clip" id="Z"></audio>
          </button>
          <button class="drum-pad" id="cowbell" onClick={this.handleClick("X", "cowbell")}>X
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/11[kb]78-COW1.wav.mp3" class="clip" id="X"></audio>
          </button>
          <button class="drum-pad" id="tambourine" onClick={this.handleClick("C", "tambourine")}>C
            <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-78/26[kb]78-TAM4.wav.mp3" class="clip" id="C"></audio>
          </button>
        </div>
        <header id="title">DRUM MACHINE</header>
      </div>
    )
  }
}

export default App;
