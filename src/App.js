import './App.css';
import OrganizationHeader from './components/OrganizationHeader/OrganizationHeader';
import OrganizationInfoCard from './components/OrganizationInfoCard/OrganizationInfoCard'
import OrganizationNavbar from './components/OrganizationNavbar/OrganizationNavbar';
import ComplianceContainer from './components/ComplianceContainer/ComplianceContainer';

function App() {
  return (
    <div className="App">
      <OrganizationHeader></OrganizationHeader>
      <OrganizationInfoCard></OrganizationInfoCard>
      <OrganizationNavbar></OrganizationNavbar>
      <ComplianceContainer></ComplianceContainer> 
    </div>
  );
}

export default App;
