import React from 'react';
import { Card, CardHeader, CardBody } from '@trussworks/react-uswds';
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
        <Card>
            <CardHeader>
                    <h3>{dummyInformation.NAME}</h3>
            </CardHeader>
            <CardBody>
                    <span>DUNS: {dummyInformation.DUNS}</span>
                    <span>EIN: {dummyInformation.EIN}</span>
                    <span>UEI: {dummyInformation.UEI}</span>
                    <span>LOCATION: {dummyInformation.LOCATION}</span>
                    <span id="organizationWebsiteLink">WEBSITE: <a href={dummyInformation.WEBSITE}>{dummyInformation.WEBSITE}</a></span>
            </CardBody>
        </Card>
    )
}
