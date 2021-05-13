import React from 'react';

const dummyInformation = {
    DUNS: 1144062,
    EIN: 60675574,
    UEI: 37244,
    NAME: "THE BIRKEN MANUFACTURING COMPANY",
    LOCATION: "BLOOMFIELD, CT",
    WEBSITE: "https://www.birken.net/index.html"
}

export default function OrganizationInfoCard() {
    return (
        
        <div id="organizationInfoCard">
            <div id="organizationICName">
                <h3>{dummyInformation.NAME}</h3>
            </div>
            <div id="organizationICRow">
                <span>DUNS: {dummyInformation.DUNS}</span>
                <span>EIN: {dummyInformation.EIN}</span>
                <span>UEI: {dummyInformation.UEI}</span>
                <span></span><span></span><span></span>
            </div>
        </div>
    )
}
