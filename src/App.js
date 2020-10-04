import React from 'react';
import logo from './logo.svg';
import './App.css';

//import ButtonLong from './components/ButtonLong'
import ButtonShort from './components/ButtonShort'
import HelpPopup from './components/HelpPopup'
import Improvements from './components/Improvements'
import { render } from '@testing-library/react';

import x_svg from './assets/x.svg';
import Service_Ara_png from'./assets/Services-Ara.png';
import arrow_svg from './assets/arrow.svg'; 

class App extends React.Component {
  //State
  state = {
    help_popup:false
  }
  //Method
  handleButtonPress = () =>{
    this.setState({
      help_popup:!this.state.help_popup
    });
  }

  //Render
  render(){
  const{help_popup} = this.state;
  const{
    handleButtonPress
  } = this;
  return (
    <div className="App">
      <body>
        <div className="Popup_Landing">
          {help_popup?<HelpPopup className="help"></HelpPopup>:<div></div>}

          <div className="close">
            <img src={x_svg}/>
          </div>

          <div class="internal">
            <img src={Service_Ara_png}
                class="Services-Ara"/>         
            <h3>KAIST 공식 커뮤니티 ARA가 리뉴얼되었습니다.</h3>
            <div class="renewal_inf">
              <p>10월 31일부로, 리뉴얼된 아라와 함께할 수 있습니다.</p>
              <p>KAIST 학내 모든 정보에 대하여, <span class="red">가장 정확한 정보를 가장 신속하게</span> 접근할 수 있도록 합니다.</p>
            </div>
            <div class="change">
              <p>이번 리뉴얼을 통해</p>
              <Improvements>보다 직관적인 UI/UX 구현</Improvements>
              <Improvements>복잡했던 게시판 항목의 재분류</Improvements>
              <Improvements>사용자 이용 편리를 위한 게시글 담아두기 기능 제공</Improvements>
              <p>등 보다 발전된 모습으로 돌아왔습니다.</p>
            </div>
            <div class="other">
              <p>보다 자세한 내용은 아래 New ARA 이용가이드에서 확인하실 수 있습니다.</p>
              <p>지금 새로운 ARA와 함께하세요.</p>
            </div>
            <div class="buttons">
              <div class="long_button" onClick={handleButtonPress}>
                <h4>New ARA 이용 가이드 바로가기</h4>
                <p>변화된 아라에 대한 가이드를 제공합니다 </p>
                <img src={arrow_svg} className="arrow"/>
              </div>
                <ButtonShort reference="https://newara.sparcs.org">New ARA 바로가기</ButtonShort>
                <ButtonShort reference="https://ara.kaist.ac.kr">기존 ARA 바로가기</ButtonShort>
            </div>
          </div>

          <div class="Contact">
            <p>Contact</p>
            <p>ara@kaist.ac.kr</p>
          </div>

        </div>
      </body>
    </div>
  );
  }
}

export default App;
