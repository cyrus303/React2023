import logo from './Images/stopwatch.png';
import report from './Images/report.png';
import setting from './Images/setting.png';
import login from './Images/login.png';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Pomodoro Logo" />
        <p>Pomodoro</p>
      </div>
      <div className="controls-container">
        <div className="control report">
          <img src={report} alt="" />
          <p>Report</p>
        </div>
        <div className="control settings">
          <img src={setting} alt="" />
          <p>Settings</p>
        </div>
        <div className="control login">
          <img src={login} alt="" />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
