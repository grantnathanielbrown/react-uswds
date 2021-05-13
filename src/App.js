import logo from './logo.svg';
import './App.css';
import OrganizationHeader from './components/OrganizationHeader/OrganizationHeader.jsx';
import OrganizationInfoCard from './components/OrganizationInfoCard/OrganizationInfoCard.jsx'

function App() {
  return (
    <div className="App">
      <OrganizationHeader></OrganizationHeader>
      <OrganizationInfoCard></OrganizationInfoCard> 
    </div>
  );
}

export default App;
