import React, { Component } from 'react';
import PageHeader from './components/PageHeader';
import ContactIcons from './components/ContactIcons';
import ContentHeader from './components/ContentHeader';
import ContentAbout from './components/ContentAbout';
import ContentProjects from './components/ContentProjects';
import ContentCV from './components/ContentCV';
import './App.css';

class App extends Component {
  state = {
    mainContent: 'about',
    selectedProject: 'tapped',
    currentTheme: 'light',
    themes: {
      light: {
        'background-color': 'rgb(255,254,200)',
        'text-color': 'rgb(96,144,114)',
        'link-color': 'rgb(188,75,45)',
        'accent-color': 'rgb(75,12,11)',
        'shadow-color': 'rgba(96,144,114,0.6)'
      },
      dark: {
        'background-color': 'black',
        'text-color': 'rgb(96,144,114)',
        'link-color': 'rgb(188,75,45)',
        'accent-color': 'rgb(75,12,11)',
        'shadow-color': 'rgba(96,144,114,0.6)'
      }
    }
  };

  componentDidMount() {
    this.toggleTheme();
  }

  setContent = (content) => {
    this.setState({
      mainContent: content
    });
  }

  setProject = (project) => {
    this.setState({
      selectedProject: project
    });
  }

  setTheme = () => {
    const theme = this.state.themes[this.state.currentTheme];
    Object.keys(theme).forEach((key) => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    });
  }

  switchContent = () => {
    switch (this.state.mainContent) {
      case 'about':
        return <ContentAbout />;
      case 'projects':
        return <ContentProjects setProject={this.setProject} selectedProject={this.state.selectedProject} />;
      case 'cv':
        return <ContentCV />;
      default:
        return <ContentAbout />;
    }
  }

  toggleTheme = () => {
    if (this.state.currentTheme === 'light') {
      this.setState({
        currentTheme: 'dark'
      }, this.setTheme());
    } else {
      this.setState({
        currentTheme: 'light'
      }, this.setTheme());
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <PageHeader />
          <ContentHeader selectedContent={this.state.mainContent} setContent={this.setContent} />
          {this.switchContent()}
        </div>
        <div className="footer">
          <div className="placeholder" />
          <ContactIcons />
          <div className="theme-icon">
            <svg onClick={this.toggleTheme} aria-labelledby="simpleicons-react-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-react-icon">React icon</title><circle cx="12" cy="12" r="2.139"/><path d="M6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/><path d="M5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545z"/><path d="M18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501z"/><path d="M12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" /></svg>
          </div>
          {/* <h1 onClick={this.toggleTheme} >T</h1> */}
        </div>
      </div>
    );
  }
}

export default App;
